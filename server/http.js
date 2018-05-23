var express = require('express');
var json = require("./json");

var species_routing = express.Router();
species_routing
    .get("/", json.jsonAllSpecies)
    .get("/short", json.jsonAllSpeciesShort)
    .get("/:id", json.jsonGetSpeciesByID)
    .get("/:id/collections", json.jsonGetCollectionBySpeciesID);
    //.get("/:id(\d+)", species_handlers.aSpeciesRequested)
    //.post("/", species_handlers.aSpeciesCreated);

var collection_routing = express.Router();
collection_routing
    .get("/", json.jsonAllCollections)
    .get("/:id", json.jsonGetCollectionByID)
    .put("/:id", json.jsonCreateCollection)
    .post("/:id", json.jsonEditCollection)
    .delete("/:id", json.jsonDeleteCollection);

var category_routing = express.Router();
category_routing
    .get("/:category", json.jsonGetSpeciesByCategory);

var admin_routing = express.Router();
admin_routing
    .post("/", function(req, res) {
        if(req.body.password == process.env.ADMIN_PASSWORD) {
            //authenticate...
            res.status(200).json({msg: "Authenticated successfully"});
        } else {
            //authenticate...
            res.status(301).json({msg: "Failed to authenticate"});
        }
    });

module.exports = {
    species_routing, collection_routing, category_routing, admin_routing
};
