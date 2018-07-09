<template>
    <div>
        <h2>#{{ tag }}</h2>
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
            tag: this.$route.params.tag,
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loaded = false;
            fetch(`/tag/${this.tag}`, {
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
