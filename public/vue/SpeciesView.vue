<template>
    <div id="speciesinfo">
        <h2>{{ taxa }} <div class="btn-group mx-2"><router-link class="btn px-1 py-1" :to="{name: 'edit_species', params:{id}}">✏️</router-link><a class="btn px-1 py-1" data-toggle="modal" data-target="#deleteConfirmationModal">🗑</a></div></h2>
        <h3>{{ common }}</h3>
        <h5><router-link :to="{name: 'view_category', params:{id:category}}">{{ category }}</router-link></h5>
        <div class="card">
            <div class="card-header">
                {{ taxa }} Information
            </div>
            <div class="card-body" v-if="!!description">
                <h5 class="card-title">Description</h5>
                <p class="card-text">{{ description }}</p>
            </div>
            <div class="card-body" v-if="!!size">
                <h5 class="card-title">Size</h5>
                <p class="card-text">{{ size }}</p>
            </div>
            <div class="card-body" v-if="!!wildlife">
                <h5 class="card-title">Wildlife</h5>
                <p class="card-text">{{ wildlife }}</p>
            </div>
            <div id="tags" class="text-right"><router-link class="btn btn-outline-info btn-sm tag" v-for="tag in tags" :to="{name: 'view_tag', params:{tag}}" :key="tag">{{tag}}</router-link></div>
        </div>

        <h3>Collections in inventory <router-link class="btn px-1 py-1" :to="{name: 'create_collection'}">✏️</router-link></h3>
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
import store from "../c_store";
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
            all_collections: [],
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loading = true;
            return store.species.byID(this.id).read()
            .then(data=> {
                return store.collection.bySpecies(this.id)
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
        handleDelete() {
            store.species.byID(this.id).delete()
            .then(data=> {
                $("#deleteConfirmationModal").modal("hide");
                //this.saving = false;
                this.$router.push({name:"view_all_species", params:{id:this.id}});
            });
        }
    }
};
</script>
<style>
    .card {
        max-width: 50%;
    }
    .tag {
        padding: 0 8px;
        border-radius: 1rem;
    }
</style>
