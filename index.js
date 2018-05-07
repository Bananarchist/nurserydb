const express = require("express");
const bodyParser = require("body-parser");
const routing = require("./server/http");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/collection", routing.collection_routing);
app.use("/species", routing.species_routing);
app.use("/category", routing.category_routing);

app.listen(8080, () => {
    console.log("Server running @ http://localhost:8080");
});
