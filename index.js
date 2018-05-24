const express = require("express");
const bodyParser = require("body-parser");
const routing = require("./server/http");
const session = require("express-session");
const app = express();
var port = process.env.PORT || 8080;
var sess = {
    secret: "keyboard cat",
    cookie: {}
};
if(process.env.production) {
    app.set("trust proxy", 1);
    sess.cookie.secure = true;
}

app.use(session(sess));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/collection", routing.collection_routing);
app.use("/species", routing.species_routing);
app.use("/category", routing.category_routing);
app.use("/authenticate", routing.admin_routing);

app.listen(port, () => {
    console.log(`Server running @ http://localhost:${port}`);
});
