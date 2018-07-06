<template>
    <div>
        <collection-list v-bind:collection="species" v-bind:table="'species'" v-bind:headers="['id', 'taxa','common','category','tags','description','size','wildlife']" v-if="loaded"></collection-list>
        <span v-if="!loaded">Loading gimma sec...</span>
    </div>
</template>

<script>
import tableView from "./TableView.vue";
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
            fetch("/species/", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
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
};
</script>
