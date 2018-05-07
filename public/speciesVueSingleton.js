var app = new Vue({
    el: "#speciesinfo",
    data: {
        id: parseInt(window.location.search.split("=").pop(), 10),
        taxa: "",
        common: "",
        tags: "",
        category: "",
        size: "",
        wildlife: "",
        description: "",
        all_collections: [],
    },
    created: function() {
        fetch(`/species/${this.id}`, {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method:"GET",
        })
        .then(data=>data.json())
        .then(data=> {
            return fetch(`species/${this.id}/collections`, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method:"GET",
            })
            .then(data2 => data2.json())
            .then(data2 => {
                data[0].all_collections = data2;
                return data[0];
            });
        })
        .then(data=> {
            this.taxa = data.taxa;
            this.common = data.common;
            this.tags = data.tags;
            this.category = data.category;
            this.size = data.size;
            this.wildlife = data.wildlife;
            this.description = data.description;
            this.description = data.description;
            this.all_collections = data.all_collections;
            return data;
        });
    }
})
