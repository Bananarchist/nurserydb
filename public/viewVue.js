

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
                    }
                },
                template: `
                <div class="h-100">
                    <table class="table">
                        <thead>
                            <!--<tr>
                                <td v-for="key in Object.keys(data)">{{ key }}</td>
                            </tr>-->
                        </thead>
                        <tbody>
                            <tr v-for="s in species">
                                <td v-for="key in Object.keys(s)">{{ s[key]}}</td>
                            </tr>
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
                    }
                },
                template: `
                <div class="h-100">
                    <table class="table">
                        <thead>
                            <!--<tr>
                                <td v-for="key in Object.keys(data)">{{ key }}</td>
                            </tr>-->
                        </thead>
                        <tbody>
                            <tr v-for="c in collections">
                                <td v-for="key in Object.keys(c)">{{ c[key]}}</td>
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
        current_view: "collection-list",
        links: [
            {
                title: "Collections",
                view: "collection-list"
            },
            {
                title: "Species",
                view: "species-list",
            }
        ]
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
