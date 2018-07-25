<template>
    <div>
        <collection-list v-bind:collection="species" v-bind:table="'species'" v-bind:headers="['id', 'taxa','common','category','tags','description','size','wildlife']" v-if="loaded"></collection-list>
        <span v-if="!loaded">Loading gimma sec...</span>
    </div>
</template>

<script>
import tableView from "./TableView.vue";
import store from "../c_store";
export default {
    components: {
        collectionList: tableView
    },
    data() {
        return {
            loaded: false,
            species: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loaded = false;
            store.species.all()
        /*    fetch("/species/", {
                "credentials": "include",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
                    "x-access-token": "hello",
                },
                method:"GET",
            })*/
            .then(data=> {
                this.species = data;
                this.loaded = true;
            });
        }
    }
};
</script>
