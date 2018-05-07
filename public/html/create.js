var personform = new Vue({
    el: "#personform",
    data: {
        form: {

        }
    },
    methods: {
        addPerson: function() {
            http.send(this.form).then(
                (data) => {
                    console.log("createred");
                }
            )
            this.form.keys().forEach(k=>this.form[k]="");
        }
    }
})
