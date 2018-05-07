var app = new Vue({
    el: "#categoryinfo",
    data: {
        category: window.location.search.split("=").pop(),
        all_species: [],
    },
    created: function() {
        fetch(`/category/${this.category}`, {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method:"GET",
        })
        .then(data=>data.json())
        .then(data=> {
            this.all_species = data;
        });
    }
})
