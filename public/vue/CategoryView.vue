<template>
    <div>
        <h2>{{ cat }} <small class="text-muted"><router-link :to="{name: 'edit_category', params:{id}}">edit</router-link></small></h2>
        <collection-list v-bind:collection="list" v-bind:table="'species'" v-if="loaded"></collection-list>
        <span v-if="!loaded">Loading gimma second...</span>
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
            list: [],
            cat: this.$route.params.id,
            id: this.$route.params.id
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loaded = false;
            store.category.byID(this.cat).read()
            .then(data=> {
                this.list = data;
                this.loaded = true;
            });
        }
    }
}
</script>
