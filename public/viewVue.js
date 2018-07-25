import SpeciesView from "./vue/SpeciesView.vue";
import CategoryView from "./vue/CategoryView.vue";
import CollectionView from "./vue/CollectionView.vue";
import AllSpecies from "./vue/AllSpecies.vue";
import AllCollections from "./vue/AllCollections.vue";
import CollectionEdit from "./vue/CollectionEdit.vue";
import SpeciesEdit from "./vue/SpeciesEdit.vue";
import CategoryEdit from "./vue/CategoryEdit.vue";
import CollectionCreate from "./vue/CollectionCreate.vue";
import SpeciesCreate from "./vue/SpeciesCreate.vue";
import TagView from "./vue/TagView.vue";
import CollectionSplit from "./vue/CollectionSplit.vue";
import LoginView from "./vue/Login.vue";
import DashboardView from "./vue/Dashboard.vue";
import store from "./c_store.js";

const routes = [
    {path: "/", component: DashboardView, name:"dashboard"},
    {path: "/collection/all", component: AllCollections, name: "view_all_collections"},
    {path: "/species/all", component: AllSpecies, name: "view_all_species"},
    {path: "/species/:id", component: SpeciesView, name: "view_species_by_id"},
    {path: "/collection/:id", component: CollectionView, name: "view_collection_by_id"},
    {path: "/species/category/:id", component: CategoryView, name: "view_category"},
    {path: "/species/category/:id/edit", component: CategoryEdit, name: "edit_category"},
    {path: "/collection/:id/edit", component: CollectionEdit, name: "edit_collection"},
    {path: "/collection/:id/split", component: CollectionSplit, name: "split_collection"},
    {path: "/species/:id/edit", component: SpeciesEdit, name: "edit_species"},
    {path: "/create/collection", component: CollectionCreate, name: "create_collection"},
    {path: "/create/species", component: SpeciesCreate, name: "create_species"},
    {path: "/tag/:tag", component: TagView, name:"view_tag"},
    {path: "/login", component: LoginView, name:"login"},
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    console.log(to);
    if(!document.cookie.match(/token/)) {
        if(to.name !== "login") {
            next({name:"login", params:{redirect:{name:to.name, params:to.params}}});
        } else {
            next();
        }
    } else {
        next();
    }
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
        ]
    },
    router
});
