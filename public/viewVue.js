var store = {
    debug: true,
    state: {

    },
    openTab(component, title) {
        if(this.debug) console.log("Opening new tab", component, title);
    }
}

/*var idLink = Vue.component("id-link", {
    props: ["list", "id"],
    template: `<a href="#" @click="openIDLink">${id}</a>`,
    methods: {
        openIDLink: function(event) {
            store.openTab(`${list}-item-by-id`, `${list}.id=${id}`);
        }
    }
})
*/

var dataCell = Vue.component("data-cell", {
    props: ["data", "column", "list"],
    template: `<td v-if="isID"><a href="#" @click="$emit('open-tab', {table, data})">{{data}}</a></td><td v-else @dblclick="editing=!editing"><div v-if="!editing">{{data}}</div><input type="text" v-model="data" v-if="editing" /></td>`,
    data: function() {
        return {
            editing: false
        }
    },
    computed: {
        //edit mode...
        isID() {
            return !!this.column.match(/id$/);
        },
        table() {
            let match_type = this.column.match(/id$/);
            if(match_type) {
                if(match_type.index) {
                    return this.column.match(/^(\S+)_/)[1];
                } else {
                    return match_type.list;
                }
            } else {
                return this.list;
            }
        }
    },
    methods: {
        openTab: store.openTab,
        swapEditMode() {
            this.editing = !this.editing;
        }
    }
});

var speciesRow = Vue.component("species-row", {
        props: ["columns", "values"],
        template: `
                    <tr>
                        <data-cell v-for="key in columns" v-bind:data="values[key]" v-bind:column="key" v-bind:list="'species'" v-bind:key="key"></data-cell>
                    </tr>
                    `,
        methods: {
            isIDLink(key) {
                return key.match(/id$/);
            },
            openTab: store.openTab,
            getStringForKey: function(array, list, key) {
                let match_test = key.match(/id$/);
                if(match_test) {
                    if(match_test.index) {
                        return array[key]; //for now
                    } else {
                        return `<a href="#" data-list="${list}" data-list-item-id="${array[key]}" @click="openTab()">${array[key]}</a>`;
                    }
                } else {
                    return array[key];
                }
            },
        }
});

var speciesList = Vue.component("species-list", function(resolve, reject) {
    //if(!this.collections) {
        fetch("/species/", {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method:"GET",
        })
        .then(data=>data.json())
        .then(data=> {
            //this.collections = data;
            resolve({
                props: {
                    species: {
                        type: Array,
                        default: () => data,
                    },
                    columns: {
                        type: Array,
                        default: () => Object.keys(data[0]),
                    }
                },
                template: `
                <div>
                    <table class="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <td v-for="key in columns">{{ key }}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <species-row v-for="(s,index) in species" v-bind:columns="columns" v-bind:values="s" v-bind:key="index"></species-row>
                        </tbody>
                    </table>
                </div>`
            });
        });
//    }
});

var collectionList = Vue.component("collection-list", function(resolve, reject) {
    //if(!this.collections) {
        fetch("/collection/", {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method:"GET",
        })
        .then(data=>data.json())
        .then(data=> {
            //this.collections = data;
            resolve({
                props: {
                    collections: {
                        type: Array,
                        default: () => data,
                    },
                    columns: {
                        type: Array,
                        default: () => Object.keys(data[0]),
                    }
                },
                template: `
                <div class="h-100">
                    <table class="table table-hover table-responsive h-100">
                        <thead class="sticky-top">
                            <tr>
                                <td v-for="key in columns">{{ key }}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="c in collections">
                                <td v-for="key in columns">{{ c[key]}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            });
        });
//    }
});

var app = new Vue({
    el: "#nursery",
    data: {
        all_collections: [],
        all_species: [],
        //state: store.state,
        current_view: "collection-list",
        links: [
            {
                title: "Collections",
                view: "collection-list",
                args: {},
            },
            {
                title: "Species",
                view: "species-list",
                args: {},
            }
        ],
    },
    created: function() {
        let search = window.location.search.split("?");
        if(search.length > 1) {
            let view = search[1].match(/view=(\w+)/)[1];
            //let id = search[1].match(/id=(\d=)/)[1];
            if(view) {
                switch(view) {
                    case "species-list":
                        this.current_view = "species-list"
                        break;
                    case 'collection-list':
                        this.current_view = "collection-list"
                        break;
                    default: break;
                }
            }
        }
    },
    methods: {
        onOpenTab(table, id) {
            console.log("whooooooo,", table, id);
        },
        click_id: function(event) {
            //get list
            //get id
            //open new link
        },
    }
})

/*var speciesList = new Vue.Component({
    props: {
        species: {
            type: Array,
            default: []
        }
    },,
    template: `
    <div class="h-100" id="collectionslist">
        <table class="table">
            <thead>
                <!--<tr>
                    <td v-for="key in Object.keys(species)">{{ key }}</td>
                </tr>-->
            </thead>
            <tbody>
                <tr v-for="s in species">
                    <td v-for="key in Object.keys(s)">{{ s[key]}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
});*/
/*Vue.component("editableRow", {
    props: ["object", "updateFunction"],
    template: "<tr><td></td></tr>"
});

Vue.component("editableDataTable", {
    props: ["rows", "columns"],
    template: `<table><thead><tr><td v-for="c in columns">{{c}}></td></tr></thead><tbody><editable-row v-for="r in rows" v-bind:object="r" /></tbody></table>`
})*/
