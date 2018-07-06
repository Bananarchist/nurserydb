import SpeciesView from "./vue/SpeciesView.vue";
import CategoryView from "./vue/CategoryView.vue";
import CollectionView from "./vue/CollectionView.vue";
import AllSpecies from "./vue/AllSpecies.vue";
import AllCollections from "./vue/AllCollections.vue";
import CollectionEdit from "./vue/CollectionEdit.vue";
import SpeciesEdit from "./vue/SpeciesEdit.vue";
import CategoryEdit from "./vue/CategoryEdit.vue";
import store from "./c_store.js";

const routes = [
    {path: "/collection/all", component: AllCollections, name: "view_all_collections"},
    {path: "/species/all", component: AllSpecies, name: "view_all_species"},
    {path: "/species/:id", component: SpeciesView, name: "view_species_by_id"},
    {path: "/collection/:id", component: CollectionView, name: "view_collection_by_id"},
    {path: "/species/category/:id", component: CategoryView, name: "view_category"},
    {path: "/species/category/:id/edit", component: CategoryEdit, name: "edit_category"},
    {path: "/collection/:id/edit", component: CollectionEdit, name: "edit_collection"},
    {path: "/species/:id/edit", component: SpeciesEdit, name: "edit_species"},
    {path: "/create/collection", component: CollectionEdit, name: "create_collection"},
    {path: "/create/species", component: SpeciesEdit, name: "create_species"}
];

const router = new VueRouter({
    routes
});

var app = new Vue({
    el: "#nursery",
    data: {
        links: [
            {
                title: "All Collections",
                name: "view_all_collections",
            },
            {
                title: "All Species",
                name: "view_all_species",
            },
            {
                title: "Add Species",
                name: "create_species"
            },
            {
                title: "Add Collection",
                name: "create_collection"
            }
        ],
        shared: store.data,
        inputPass: "",
    },
    methods: {
        authenticate() {
            //check with server if pass correct
            fetch("/authenticate", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"POST",
                body: JSON.stringify({password:""})
            })
            .then(data=> {
                sessionStorage.setItem("pass", "");
            })
            .catch(data=> {
                console.log(data);
            });

        }
    },
    computed: {
        authenticated() {
            return !!sessionStorage.getItem("pass");
        }
    },
    router
});
