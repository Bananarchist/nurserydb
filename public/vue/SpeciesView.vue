<template>
    <div id="speciesinfo">
        <h2>{{ taxa }}</h2>
        <h3>{{ common }}</h3>
        <h5><router-link v-bind:to="'/species/category/'+category">{{ category }}</router-link></h5>
        <p> {{ description }}
        Size: {{ size }}<br />
        Wildlife
        <p>{{ wildlife }}</p>
        <div id="tags"><a class="btn btn-outline-info btn-sm" v-for="t in tags" :href="'tags/'+t">{{t}}</a></div>
        <router-link :to="{name: 'edit_species', params:{id}}" class="btn btn-primary" v-if="authenticated">Edit this species</router-link>
        <button class="btn btn-warning" data-toggle="modal" data-target="#deleteConfirmationModal">Delete this species</button>
        <h3>Collections in inventory</h3>
        <div class="main_view">
            <table-view v-bind:collection="all_collections" v-bind:table="'collection'" v-bind:headers="['id','size','location','quantity','for_sale','price','source','added_to_inventory','credit']"></table-view>
        </div>
        <div class="modal" id="deleteConfirmationModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Delete {{ taxa }} from database?</h5>
                        <button type="button" class="close" data-dismiss="modal"><span area-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        This will also delete the {{ all_collections.length }} associated collections
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" class="btn btn-danger" @click="handleDelete()">Yes</button>
                    </div>
                </div>
            </div>
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
                this.tags = data.tags ? data.tags.split(",") : "";
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
        },
        handleDelete() {
            //send delete
            //onload, redirect to allspecies
            fetch(`/species/${this.id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            })
            .then(data=>data.json())
            .then(data=> {
                $("#deleteConfirmationModal").modal("hide");
                //this.saving = false;
                this.$router.push({name:"view_all_species", params:{id:this.id}});
            });
        }
    }
};
</script>
