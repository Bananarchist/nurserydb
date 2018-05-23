<template>
    <div id="collectioninfo">
        <h2><router-link :to="{name: 'view_species_by_id', params: {id:species_id}}">{{common}} (<i>{{ taxa }}</i>)</router-link></h2><router-link
        <h5><router-link :to="{name: 'view_category', params: {category}}">{{ category }}</router-link></h5>
        <table class="table">
            <thead>
                <tr><th>Size</th><th>Price</th><th>For Sale</th><th>Total</th></tr>
            </thead>
            <tbody>
                <tr><td>{{ size }}</td><td>{{ price }}</td><td>{{ for_sale }}</td><td>{{ quantity }}</td></tr>
            </tbody>
        </table>
        <router-link :to="{name: 'edit_collection', params:{id}}" class="btn btn-primary" v-if="authenticated">Edit this collection</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: parseInt(this.$route.params.id),
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
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
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
        },
        authenticated() {
            return true;
        }
    }
}

</script>
