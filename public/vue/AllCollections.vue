<template>
    <div>
        <collection-list v-bind:collection="collections" v-bind:table="'collection'" v-bind:headers="['id', 'species_id', 'taxa','common','size','quantity','for_sale','location','price','source','added_to_inventory','credit']" v-if="loaded"></collection-list>
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
            collections: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loaded = false;
            fetch("/collection/", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
                    "Authorization": `Basic ${btoa("admin:1994")}`
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
};
</script>
