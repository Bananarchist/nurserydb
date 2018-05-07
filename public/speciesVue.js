var app = new Vue({
    el: "#specieslist",
    data: {
        all_species: [],
    },
    created: function() {
        fetch("/species/", {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method:"GET",
        })
        .then(data=>data.json())
        .then(data=>this.all_species=data);
    }
})
