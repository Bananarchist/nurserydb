const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const routing = require("./server/http");
const session = require("express-session");
const basicAuth = require("basic-auth"); //require("express-basic-auth");
const app = express();
var port = process.env.PORT || 8080;






app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/collection", routing.collection_routing);
app.use("/species", routing.species_routing);
app.use("/category", routing.category_routing);
app.use("/tag", routing.tag_routing);
app.use("/login", routing.admin_routing);

app.listen(port, () => {
    console.log(`Server running @ http://localhost:${port}`);
});

module.exports = app;
