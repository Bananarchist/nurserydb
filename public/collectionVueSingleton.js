var app = new Vue({
    el: "#collectioninfo",
    data: {
        id: parseInt(window.location.search.split("=").pop(), 10),
        taxa: "",
        common: "",
        tags: "",
        category: "",
        size: "",
        added_to_inventory: "",
        price: "",
        for_sale: 0,
        quantity: 0,
        species_id: 0,
        credit: "",
        source: "",
        location: "",
    },
    created: function() {
        fetch(`/collection/${this.id}`, {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method:"GET",
        })
        .then(data=>data.json())
        .then(data=> {
            this.taxa = data[0].taxa;
            this.common = data[0].common;
            this.tags = data[0].tags;
            this.category = data[0].category;
            this.size = data[0].size;
            this.quantity = data[0].quantity;
            this.for_sale = data[0].for_sale;
            this.price = data[0].price;
            this.added_to_inventory = data[0].added_to_inventory;
            this.species_id = data[0].species_id;
            this.credit = data[0].credit;
            this.source = data[0].source;
            this.location = data[0].location;
            return data[0];
        });
    }
})
