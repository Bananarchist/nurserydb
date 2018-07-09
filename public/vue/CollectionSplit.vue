<template>
    <div id="collectioninfo">
        <form>
            <div class="form-group" v-for="formData in forms">
                <div class="form-group">
                    <label for="size">Potting Size</label>
                    <input type="text" class="form-control" id="size" placeholder="1-gal" v-model="formData.size">
                </div>
                <div class="form-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" class="form-control" id="quantity" placeholder="0" v-model="formData.quantity">
                </div>
                <div class="form-group">
                    <label for="for_sale">For Sale</label>
                    <input type="number" class="form-control" id="for_sale" placeholder="0"  v-model="formData.for_sale">
                </div>
                <div class="form-group">
                    <label for="price">Sale Price</label>
                    <input type="text" class="form-control" id="price" placeholder="$5.00" v-model="formData.price">
                </div>
                <div class="form-group">
                    <label for="credit">Potter/Salvager/Propagator</label>
                    <input type="text" class="form-control" id="credit" placeholder="Erica Guttman"  v-model="formData.credit">
                </div>
                <div class="form-group">
                    <label for="source">Plant Source</label>
                    <input type="text" class="form-control" id="source" placeholder="Darlin Creek"  v-model="formData.source">
                </div>
                <div class="form-group">
                    <label for="location">Current Location</label>
                    <input type="text" class="form-control" id="location" placeholder="NPSN"  v-model="formData.location">
                </div>
            </div>
            Accounted for {{ total }} / {{ collection.quantity}} and for sale quantity {{ totalForSale }} / {{ collection.for_sale }}
            <button type="button" class="btn btn-primary" @click="saveChanges">Save</button>
        </form>
    </div>
</template>

<script>
import store from "../c_store.js";
import CollectionEdit from "./CollectionEdit.vue";
export default {
    props: ["collection"],
    data() {
        return {
            forms: [],
            id: this.$route.params.id,
            loaded_c: false,
            saving: false,
        }
    },
    created() {
        this.fetchCollection(this.$route.params.id).then(
            () => {
                this.newFormData();
                this.newFormData();
            }
        );
    },
    calculated: {
        total() {
            return this.forms.reduce((a,v) => a+v.quantity, 0);
        },
        totalForSale() {
            return this.forms.reduce((a,v) => a+v.for_sale, 0);
        }
    },
    methods: {
        newFormData() {
            this.forms.push(
                {
                    size: this.collection.size,
                    //added_to_inventory: "",
                    price: this.collection.price,
                    for_sale: this.collection.for_sale,
                    quantity: this.collection.quantity,
                    credit: this.collection.credit,
                    source: this.collection.source,
                    location: this.collection.location
                }
            )
        },
        fetchCollection() {
            this.loaded_c = false;
            return store.getCollectionBy({id:this.id})
            .then(data=> {
                Object.keys(this.formData).forEach(k=>{if(!!data[0][k]) { this.formData[k] = data[0][k]}});
                this.loaded_c = true;
                return data[0];
            });
        },
        valid() {
            return false; //lol
        },
        saveChanges() {
            if(this.valid()) {
                let method = this.editing ? "POST" : "PUT";
                let url = `/collection/${this.editing ? this.id : ""}`
                this.saving = true;
                fetch(url, {
                    method,
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(this.formData)
                })
                .then(data=>data.json())
                .then(data=> {
                    console.log(data);
                    //get id
                    //redirect to collection view/id
                    this.saving = false;
                });

            }
        },
    }
};
</script>
