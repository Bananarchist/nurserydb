var app = new Vue({
    el: "#collectionslist",
    data: {
        all_collections: [],
    },
    created: function() {
        fetch("/collection/", {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method:"GET",
        })
        .then(data=>data.json())
        .then(data=>this.all_collections=data);
    }
})


Vue.component("editableRow", {
    props: ["object", "updateFunction"],
    template: "<tr><td></td></tr>"
});

Vue.component("editableDataTable", {
    props: ["rows", "columns"],
    template: `<table><thead><tr><td v-for="c in columns">{{c}}></td></tr></thead><tbody><editable-row v-for="r in rows" v-bind:object="r" /></tbody></table>`
})
