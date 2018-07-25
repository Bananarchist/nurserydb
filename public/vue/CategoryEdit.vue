<template>
    <div id="collectioninfo">
        <form>
            <div class="form-group">
                <label for="category">Category</label>
                <input type="text" class="form-control" id="category" placeholder="Vines" v-model="formData.category">
            </div>
            <button type="button" class="btn btn-primary" @click="saveChanges">Save</button>
        </form>
        <div class="modal" id="savingProgressModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Updating category</h5>
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
    props: ["category"],
    data() {
        return {
            formData: {
                category: "",
            },
            saving: false,
        }
    },
    created() {

    },
    methods: {
        saveChanges() {
            if(this.valid()) {
                let method = this.editing ? "POST" : "PUT";
                let url = `/category/${this.editing ? this.category : ""}`;
                this.saving = true;
                $("#savingProgressModal").modal("show");
                window.setTimeout(() => {
                    $("#savingProgressModal").modal("hide");
                    this.saving = false;
                    if(this.editing) {
                        this.$router.push({name:"view_category", params:{id:this.id}});
                    } else {
                        //route to returned ID
                    }
                }, 1000);
            }
        },
    }
};
</script>
