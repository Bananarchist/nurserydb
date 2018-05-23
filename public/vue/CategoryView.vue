<template>
    <div>
        <h2>{{ cat }}</h2>
        <collection-list v-bind:collection="list" v-bind:table="'species'" v-if="loaded"></collection-list>
        <span v-if="!loaded">Loading gimma second...</span>
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
            list: [],
            cat: this.$route.params.id,
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loaded = false;
            fetch(`/category/${this.cat}`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                this.list = data;
                this.loaded = true;
            });
        }
    }
}
</script>
