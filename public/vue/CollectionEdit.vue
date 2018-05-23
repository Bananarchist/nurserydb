<template>
    <div id="collectioninfo">
        <form v-if="this.loaded_s">
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
    </div>
</template>

<script>
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
            editing: !!this.$route.params.id,
            id: this.$route.params.id,
            loaded_c: false,
            loaded_s: false,
            saving: false,
            species: []
        }
    },
    created() {
        var sequencer = Promise.resolve();
        if(this.editing && this.$route.params.id) {
            //fetch collection
            sequencer.then(
                () => this.fetchCollection(this.$route.params.id)
            )
        }
        //fetch species list
        sequencer.then(
            () => this.fetchSpecies()
        )
    },
    methods: {
        fetchCollection() {
            this.loaded_c = false;
            fetch(`/collection/${this.id}`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                //this.formData = Object.assign({}, this.formData, data[0]);
/*                this.formData.category = data[0].category;
                this.formData.size = data[0].size;
                this.formData.quantity = data[0].quantity;
                this.formData.for_sale = data[0].for_sale;
                this.formData.price = data[0].price;
                this.formData.added_to_inventory = data[0].added_to_inventory;
                this.formData.species_id = data[0].species_id;
                this.formData.credit = data[0].credit;
                this.formData.source = data[0].source;
                this.formData.location = data[0].location;*/
                Object.keys(this.formData).forEach(k=>{if(!!data[0][k]) { this.formData[k] = data[0][k]}});
                this.loaded_c = true;
                return data[0];
            });
        },
        fetchSpecies() {
            this.loaded_s = false;
            fetch("/species/short", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                this.species = data;
                this.loaded_s = true;
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
