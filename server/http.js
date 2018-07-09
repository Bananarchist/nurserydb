const basicAuth = require("express-basic-auth");
var express = require('express');
var json = require("./json");

var species_routing = express.Router();
species_routing
    .get("/", /*postAuth,*/ json.jsonAllSpecies)
    .get("/short", json.jsonAllSpeciesShort)
    .get("/:id", json.jsonGetSpeciesByID)
    .get("/:id/collections", json.jsonGetCollectionBySpeciesID)
    .post("/:id", json.jsonEditSpecies)
    .put("/", json.jsonCreateSpecies)
    .delete("/:id", json.jsonDeleteSpecies);
    //.get("/:id(\d+)", species_handlers.aSpeciesRequested)
    //.post("/", postAuth, species_handlers.aSpeciesCreated);

var collection_routing = express.Router();
collection_routing
    .get("/", json.jsonAllCollections)
    .get("/:id", json.jsonGetCollectionByID)
    .post("/:id",  json.jsonEditCollection)
    .put("/",  json.jsonCreateCollection)
    .delete("/:id", json.jsonDeleteCollection);

var category_routing = express.Router();
category_routing
    .get("/:category", json.jsonGetSpeciesByCategory)
    .post("/:category", json.jsonEditCategory);

var tag_routing = express.Router();
tag_routing
    .get("/:tag", json.jsonGetSpeciesByTag);

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
    species_routing, collection_routing, category_routing, admin_routing, tag_routing
};
