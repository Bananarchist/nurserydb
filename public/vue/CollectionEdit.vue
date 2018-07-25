<template>
    <div id="collectioninfo">
        <form v-if="this.loaded_s && this.loaded_c">
            <div class="form-group">
                <label for="species">Species</label>
                <select class="form-control" id="species" v-model="formData.species_id">
                    <option v-for="(s, index) in species" :label="s.taxa + ' - ' + s.common" :value="s.id">{{ s.taxa }} - {{s.common}}</option>
                </select>
            </div>
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
            <button type="button" class="btn btn-primary" @click="saveChanges">Save</button>
        </form>
        <div class="modal" id="savingProgressModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Saving collection</h5>
                    </div>
                    <div class="modal-content">
                        <p>You will be redirected upon completion of your request</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:75%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../c_store.js";
export default {
    props: ["collection"],
    data() {
        return {
            formData: {
                size: "",
                //added_to_inventory: "",
                price: "",
                for_sale: 0,
                quantity: 0,
                species_id: 0,
                credit: "",
                source: "",
                location: ""
            },
            _tags: [],
            id: this.$route.params.id,
            loaded_c: false,
            loaded_s: false,
            saving: false,
            species: []
        }
    },
    created() {
        this.fetchCollection(this.$route.params.id);
        this.fetchSpecies();
    },
    methods: {
        fetchCollection() {
            this.loaded_c = false;
            store.collection.byID(this.id).read()
            .then(data=> {
                Object.keys(this.formData).forEach(k=>{if(!!data[0][k]) { this.formData[k] = data[0][k]}});
                this.loaded_c = true;
                return data[0];
            });
        },
        fetchSpecies() {
            this.loaded_s = false;
            store.species.shortList().then(
            data=> {
                this.species = data;
                this.loaded_s = true;
            });
        },
        valid() {
            return true; //lol
        },
        saveChanges() {
            if(this.valid()) {
                this.saving = true;
                $("#savingProgressModal").modal("show");
                store.collection.byID(this.id).update(this.formData).then(
                data=> {
                    console.log(data);
                    $("#savingProgressModal").modal("hide");
                    this.saving = false;
                    this.$router.push({name:"view_collection_by_id", params:{id:this.id}});
                });
            }
        },
    }
};
</script>
