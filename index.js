const express = require("express");
const bodyParser = require("body-parser");
const routing = require("./server/routes");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/observation", routing.observation_routing);
app.use("/species", routing.species_routing);
app.use("/specimen", routing.specimen_routing);
app.use("/query", routing.query_routing);

app.listen(8080, () => {
    console.log("Server running @ http://localhost:8080");
});
