<template>
    <div id="speciesinfo">
        <form>
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
                <input list="category_options" type="text" class="form-control" v-model="formData.category" id="category" placeholder="Trees & Shrubs" />
                <datalist id="category_options">
                    <option value="Perennials, Vines, Ferns" />
                    <option value="Trees & Shrubs" />
                    <option value="Rain Garden Emergents & Perennials" />
                </datalist>
            </div>
            <div class="form-group">
                <label for="wildlife">Wildlife interactions</label>
                <textarea class="form-control" id="wildlife" placeholder="Deer will eat these" v-model="formData.wildlife"></textarea>
            </div>
            <div class="form-group">
                <label for="description">Species description</label>
                <textarea class="form-control" id="description" placeholder="This plant is pretty" v-model="formData.description"></textarea>
            </div>
            <div class="form-group">
                <label for="tags">Tags</label>
                <input type="text" class="form-control" id="tags" placeholder="Waterwise, edible fruit" v-model="formData.tags" />
            </div>
            <button type="button" class="btn btn-primary" @click="saveChanges">Save</button>
        </form>
        <div class="modal" id="savingProgressModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Saving species</h5>
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
export default {
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
                tags: "",
            },
            saving: false,
        }
    },
    computed: {},
    created() {
    },
    methods: {
        valid() {
            return true; //lol
        },
        saveChanges() {
            if(this.valid()) {
                let method = "PUT";
                let url = `/species/`
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
                    $("#savingProgressModal").modal("hide");
                    this.$router.push({name:"view_species_by_id", params:{id:data.insertId}});
                });
                $("#savingProgressModal").modal("show");
            }
        },
    }
};
</script>
