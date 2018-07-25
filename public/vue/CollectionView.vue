<template>
    <div id="collectioninfo">
        <h2><router-link :to="{name: 'view_species_by_id', params: {id:species_id}}">{{common}} (<i>{{ taxa }}</i>)</router-link>
            <div class="btn-group mx-2">
                <router-link class="btn px-1 py-1" :to="{name: 'edit_collection', params:{id}}">✏️</router-link>
                <router-link class="btn px-1 py-1" :to="{name:'split_collection', params:{id}}">✂️</router-link>
                <a class="btn px-1 py-1" data-toggle="modal" data-target="#deleteConfirmationModal">🗑</a>
            </div>
        </h2>
        <h5><router-link :to="{name: 'view_category', params: {id:category}}">{{ category }}</router-link></h5>
        <table class="table">
            <thead>
                <tr><th scope="col">Size</th><th scope="col">Price</th><th scope="col">For Sale</th><th scope="col">Total</th></tr>
            </thead>
            <tbody>
                <tr><td scope="row">{{ size }}</td><td>{{ price }}</td><td>{{ for_sale }}</td><td>{{ quantity }}</td></tr>
            </tbody>
        </table>
        <div class="modal" id="deleteConfirmationModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Delete this {{ taxa }} collection?</h5>
                        <button type="button" class="close" data-dismiss="modal"><span area-hidden="true">&times;</span></button>
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
import store from "../c_store";
export default {
    data() {
        return {
            id: parseInt(this.$route.params.id),
            taxa: "",
            common: "",
            tags: "",
            category: "",
            size: "",
            added_to_inventory: "",
            price: "",
            for_sale: 0,
            quantity: 0,
            species_id: 0,
            credit: "",
            source: "",
            location: "",
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            store.collection.byID(this.id).read()
            .then(data=> {
                this.taxa = data[0].taxa;
                this.common = data[0].common;
                this.tags = data[0].tags;
                this.category = data[0].category;
                this.size = data[0].size;
                this.quantity = data[0].quantity;
                this.for_sale = data[0].for_sale;
                this.price = data[0].price;
                this.added_to_inventory = data[0].added_to_inventory;
                this.species_id = data[0].species_id;
                this.credit = data[0].credit;
                this.source = data[0].source;
                this.location = data[0].location;
                return data[0];
            });
        },
        handleDelete() {
            store.collection.byID(this.id).delete()
            .then(data=> {
                $("#deleteConfirmationModal").modal("hide");
                this.$router.push({name:"view_all_collections", params:{id:this.id}});
            });
        }
    }
}

</script>
