<template>
    <div>
        <collection-list v-bind:collection="collections" v-bind:table="'collection'" v-bind:headers="['id', 'species_id', 'taxa','common','size','quantity','for_sale','location','price','source','added_to_inventory','credit']" v-if="loaded"></collection-list>
        <span v-if="!loaded">Loading gimma sec...</span>
    </div>
</template>

<script>
import tableView from "./TableView.vue";
import moment from "moment";
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
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                this.collections = data.map(c => {
                    c.added_to_inventory = moment(c.added_to_inventory);
                    return c;
                });
                this.loaded = true;
            });
        }
    }
};
</script>
