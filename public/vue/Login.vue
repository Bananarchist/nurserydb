<template>
    <form>
        <div class="alert alert-danger alert-dismissable fade show" v-if="loginError">
            <strong>{{loginError}}</strong> Please try again!
            <button type="button" class="close" data-dismiss="alert">
                <span>&times;</span>
            </button>
        </div>
        <div class="form-group">
            <label for="username_entry">Username</label>
            <input type="text" class="form-control" id="username_entry" v-model="formData.username">
        </div>
        <div class="form-group">
            <label for="password_entry">Password</label>
            <input type="password" class="form-control" id="password_entry" v-model="formData.password">
        </div>
        <button type="button" class="btn btn-primary" @click="login">Log In</button>
    </form>
</template>
<script>
import store from "../c_store";
export default {
    data: function() {
        return {
            formData: {
                username: "",
                password: "",
            },
            loginError: "",
        }
    },
    methods: {
        login() {
            //dismiss any errors
            store.login(this.formData)
            .then(
                (response) => {
                    if(response.ok) {
                        if(this.$route.params.hasOwnProperty("redirect")) {
                            this.$router.push(this.$route.params.redirect);
                        } else {
                            this.$router.push({name:"dashboard"});
                        }
                    } else {
                        this.loginError = response.statusText;
                    }
                },
                (e) => {
                    console.log("Failed", e);
                })
            .catch((e) => {
                console.log("Failed", e);
            });
        }
    }
}
</script>
<style>

</style>
