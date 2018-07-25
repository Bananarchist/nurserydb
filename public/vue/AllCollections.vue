<template>
    <div>
        <collection-list v-bind:collection="collections" v-bind:table="'collection'" v-bind:headers="['id', 'species_id', 'taxa','common','size','quantity','for_sale','location','price','source','added_to_inventory','credit']" v-if="loaded"></collection-list>
        <span v-if="!loaded">Loading gimma sec...</span>
    </div>
</template>

<script>
import tableView from "./TableView.vue";
import store from "../c_store";
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
            store.collection.all()
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
