const express = require("express");
const bodyParser = require("body-parser");
const routing = require("./server/http");
const app = express();
var port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/collection", routing.collection_routing);
app.use("/species", routing.species_routing);
app.use("/category", routing.category_routing);

app.listen(port, () => {
    console.log(`Server running @ http://localhost:${port}`);
});
