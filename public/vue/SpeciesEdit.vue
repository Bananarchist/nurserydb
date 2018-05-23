<template>
    <div id="speciesinfo">
        <form v-if="this.loaded_s">
            <div class="form-group">
                <label for="taxa">Taxanomical Name</label>
                <input type="text" class="form-control" id="taxa" placeholder="Homo sapiens" v-model="formData.taxa" />
            </div>
            <div class="form-group">
                <label for="size">Species Full Size</label>
                <input type="text" class="form-control" id="size" placeholder="1-gal" v-model="formData.size" />
            </div>
            <div class="form-group">
                <label for="formData.category">Category</label>
                <select class="form-control" v-model="formData.category" id="category">
                    <option value="Perennials, Vines, Ferns">Perennials, Vines, Ferns</option>
                    <option value="Trees & Shrubs">Trees & Shrubs</option>
                    <option value="Rain Garden Emergents & Perennials">Rain Garden Emergents & Perennials</option>
                </select>
            </div>
            <div class="form-group">
                <label for="wildlife">Wildlife Interactions</label>
                <textarea class="form-control" id="wildlife" placeholder="Deer will eat these" v-model="formData.wildlife"></textarea>
            </div>
            <div class="form-group">
                <label for="description">Species description</label>
                <textarea class="form-control" id="description" placeholder="This plant is pretty" v-model="formData.description"></textarea>
            </div>
            <div class="form-group">
                <label for="tags">Tags</label>
                <input type="text" class="form-control" id="tags" placeholder="Waterwise, edible fruit" v-model="tags" />
            </div>
            <button type="button" class="btn btn-primary" @click="saveChanges">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ["species"],
    data() {
        return {
            formData: {
                common: "",
                //added_to_inventory: "",
                taxa: "",
                size: "",
                category: "",
                wildlife: "",
                description: "",
            },
            _tags: [],
            editing: !!this.$route.params.id,
            id: this.$route.params.id,
            loaded_c: false,
            loaded_s: false,
            saving: false,
        }
    },
    computed: {
        tags: {
            get() {
                return this._tags.join();
            },
            set(v) {
                if(typeof v == "string") {
                    this._tags = v.split(",");
                } else {
                    this._tags = this._tags;
                }
            }
        }
    },
    created() {
        var sequencer = Promise.resolve();
        if(this.editing && this.$route.params.id) {
            sequencer.then(
                () => this.fetchSpecies()
            )
            //don't need collections yet
            //sequencer.then(
            //    () => this.fetchCollection(this.$route.params.id)
            //)
        }
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
            fetch(`/species/${this.id}`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data=>data.json())
            .then(data=> {
                //this.species = data;
                Object.keys(this.formData).forEach(k=>{if(!!data[0][k]) { this.formData[k] = data[0][k]}});
                    this.tags = data[0].tags || "";
                this.loaded_s = true;
            });
        },
        valid() {
            return false; //lol
        },
        saveChanges() {
            if(this.valid()) {
                let method = this.editing ? "POST" : "PUT";
                let url = `/species/${this.editing ? this.id : ""}`
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
