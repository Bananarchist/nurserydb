
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
    props: ["contents", "column", "list", "editing"],
    template: `<td>
                    <router-link v-bind:to="'/'+list+'/'+contents" v-if="isID">{{contents}}</router-link>
                    <div v-else @dblclick="editing=!editing">
                        <span v-if="!editing">{{contents}}</span>
                        <input type="text" v-model="contents" v-if="editing" />
                    </div>
                </td>`,
    data: function() {
        return {

        }
    },
    computed: {
        //edit mode...
        isID() {
            return !!this.column.match(/id$/);
        }
    },
    methods: {
        swapEditMode() {
            this.editing = !this.editing;
        }
    }
});

var editableRow = {
    name: "editable-row",
    props: ["columns", "row_data", "table"],
    data() {
        return {
            editing: false,

        };
    },
    template: `
        <tr @dblclick="editing=!editing">
            <data-cell v-for="key in columns" v-bind:contents="row_data[key]" v-bind:column="key" v-bind:list="tableFor(key)" v-bind:key="key" v-bind:editing="editing"></data-cell>
        </tr>
    `,
    methods: {
        isIDLink(key) {
            return key.match(/id$/);
        },
        tableFor(key) { //janky af
            let m_t = key.match(/id$/);
            if(m_t && m_t.index) {
                return key.match(/^(\S+)_/)[1];
            } else {
                return this.table;
            }
        }
    }
};

var speciesRow = Vue.component("species-row", {
        props: ["columns", "values"],
        data() {
            return {
                editing: false
            }
        },
        template: `
                    <tr @dblclick="editing=!editing">
                        <data-cell v-for="key in columns" v-bind:contents="values[key]" v-bind:column="key" v-bind:list="'species'" v-bind:key="key" v-bind:editing="editing"></data-cell>
                    </tr>
                    `,
        methods: {
            isIDLink(key) {
                return key.match(/id$/);
            },
            gotFocus(e) {
                console.log("focus: ",e);
            },
            gotBlur(e) {
                console.log("blur: ",e);
            },
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



var speciesView = /*Vue.component("species-by-id", function(resolve, reject)*/ {
    //if(!this.collections) {
    data() {
        return {
            loading: false,
            id: parseInt(this.$route.params.id),
            taxa: "",
            common: "",
            tags: [],
            category: "",
            size: "",
            wildlife: "",
            description: "",
            description: "",
            all_collections: [],
        }
    },
    created() {

        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loading = true;
            return fetch(`/species/${this.id}`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                return fetch(`species/${this.id}/collections`, {
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    method:"GET",
                })
                .then(data2 => data2.json())
                .then(data2 => {
                    data[0].all_collections = data2;
                    this.loading = false;
                    return data[0];
                });
            })
            .then(data => {
                this.taxa = data.taxa;
                this.common = data.common;
                this.tags = data.tags;
                this.category = data.category;
                this.size = data.size;
                this.wildlife = data.wildlife;
                this.description = data.description;
                this.description = data.description;
                this.all_collections = data.all_collections;
            });
        }
    },
    watch: {

    },
    template: `
        <div id="speciesinfo">
            <h2>{{ taxa }}</h2>
            <h3>{{ common }}</h3>
            <h5><a href="#">{{ category }}</a></h5>
            <p> {{ description }}
            Size: {{ size }}<br />
            Wildlife
            <p>{{ wildlife }}</p>
            <div id="tags"><a v-for="t in tags" :href="'tags/'+t">t</a></div>
            <h3>Collections in inventory</h3>
            <div class="main_view">
                <collection-list v-bind:collection="all_collections" v-bind:table="'collection'"></collection-list>
            </div>
        </div>
                `
            };


var collectionView = {
    data() {
        return {
            id: parseInt(this.$route.params.id),
            taxa: "",
            common: "",
            tags: "",
            category: "",
            size: "",
            added_to_inventory: "",
            price: "",
            for_sale: 0,
            quantity: 0,
            species_id: 0,
            credit: "",
            source: "",
            location: "",
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            fetch(`/collection/${this.id}`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                this.taxa = data[0].taxa;
                this.common = data[0].common;
                this.tags = data[0].tags;
                this.category = data[0].category;
                this.size = data[0].size;
                this.quantity = data[0].quantity;
                this.for_sale = data[0].for_sale;
                this.price = data[0].price;
                this.added_to_inventory = data[0].added_to_inventory;
                this.species_id = data[0].species_id;
                this.credit = data[0].credit;
                this.source = data[0].source;
                this.location = data[0].location;
                return data[0];
            });
        }
    },
    template: `
        <div id="collectioninfo">
            <h2><router-link v-bind:to="'/species/'+species_id">{{common}} (<i>{{ taxa }}</i>)</router-link></h2>
            <h5><router-link v-bind:to="'/category/'+category">{{ category }}</router-link></h5>
            <table class="table">
                <thead>
                    <tr><th>Size</th><th>Price</th><th>For Sale</th><th>Total</th></tr>
                </thead>
                <tbody>
                    <tr><td>{{ size }}</td><td>{{ price }}</td><td>{{ for_sale }}</td><td>{{ quantity }}</td></tr>
                </tbody>
            </table>
            <div id="tags"><a v-for="t in tags" :href="'tags/'+t">t</a></div>
        </div>
    `
}

var categoryView = {
    data() {
        return {
            loaded: false,
            list: [],
            cat: this.$route.params.id,
        }
    },
    props: ["cat"],
    template: `
        <div>
            <h2>{{ cat }}</h2>
            <collection-list v-bind:collection="list" v-bind:table=""
        </div>
    `
}

var allSpecies = {
    data() {
        return {
            loaded: false,
            species: [],
        };
    },
    template: `
        <div>
            <collection-list v-bind:collection="species" v-bind:table="'species'" v-if="loaded"></collection-list>
            <span v-if="!loaded">Loading gimma sec...</span>
        </div>
    `,
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loaded = false;
            fetch("/species/", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                this.species = data;
                this.loaded = true;
            });
        }
    }
}

var allCollections = {
    data() {
        return {
            loaded: false,
            collections: [],
        };
    },
    template: `
        <div>
            <collection-list v-bind:collection="collections" v-bind:table="'collection'" v-if="loaded"></collection-list>
            <span v-if="!loaded">Loading gimma sec...</span>
        </div>
    `,
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loaded = false;
            fetch("/collection/", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                this.collections = data;
                this.loaded = true;
            });
        }
    }
}

var collectionList = {
    props: {
        collection: {
            type: Array,
            default: () => [],
        },
        table: {
            type: String,
            default: "",
        }
    },
    template: `
    <div>
        <table class="table table-hover table-responsive">
            <thead class="thead-light">
                <tr>
                    <th class="sticky-top" v-for="key in columns">{{ key }}</th>
                </tr>
            </thead>
            <tbody>
                <editable-row v-for="(c, index) in collection" v-bind:columns="columns" v-bind:row_data="c" v-bind:table="table" v-bind:key="index"></editable-row>
            </tbody>
        </table>
    </div>`,
    computed: {
        columns() {
                if(this.collection.length) {
                    return Object.keys(this.collection[0]);
                } else {
                    return [];
                }
        },
    },
};

const routes = [
    {path: "/collection/all", component: allCollections},
    {path: "/species/all", component: allSpecies},
    {path: "/species/:id", component: speciesView},
    {path: "/collection/:id", component: collectionView},
    {path: "/category/:id", component: categoryView},
];

const router = new VueRouter({
    routes
});

Vue.component("editable-row", editableRow);
Vue.component("collection-list", collectionList);

var app = new Vue({
    el: "#nursery",
    data: {
        //state: store.state,
        current_view: 0,
        links: [
            {
                title: "Collections",
                component: "collection-list",
                url: "/collection/all",
                args: {},
            },
            {
                title: "Species",
                component: "species-list",
                url: "/species/all",
                args: {},
            }
        ],
    },
    router
});
