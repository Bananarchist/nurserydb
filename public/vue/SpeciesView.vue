<template>
    <div id="speciesinfo">
        <h2>{{ taxa }}</h2>
        <h3>{{ common }}</h3>
        <h5><router-link v-bind:to="'/species/category/'+category">{{ category }}</router-link></h5>
        <p> {{ description }}
        Size: {{ size }}<br />
        Wildlife
        <p>{{ wildlife }}</p>
        <div id="tags"><a v-for="t in tags" :href="'tags/'+t">t</a></div>
        <router-link :to="{name: 'edit_species', params:{id}}" class="btn btn-primary" v-if="authenticated">Edit this species</router-link>
        <h3>Collections in inventory</h3>
        <div class="main_view">
            <table-view v-bind:collection="all_collections" v-bind:table="'collection'"></table-view>
        </div>
    </div>
</template>

<script>
import tableView from "./TableView.vue";
export default {
    components: {
        tableView
    },
    data() {
        return {
            loading: false,
            id: parseInt(this.$route.params.id),
            taxa: "",
            common: "",
            tags: [],
            category: "",
            size: "",
            wildlife: "",
            description: "",
            description: "",
            all_collections: [],
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loading = true;
            return fetch(`/species/${this.id}`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                return fetch(`species/${this.id}/collections`, {
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    method:"GET",
                })
                .then(data2 => data2.json())
                .then(data2 => {
                    data[0].all_collections = data2;
                    this.loading = false;
                    return data[0];
                });
            })
            .then(data => {
                this.taxa = data.taxa;
                this.common = data.common;
                this.tags = data.tags;
                this.category = data.category;
                this.size = data.size;
                this.wildlife = data.wildlife;
                this.description = data.description;
                this.description = data.description;
                this.all_collections = data.all_collections;
            });
        },
        authenticated() {
            return true;
        }
    }
};
</script>
