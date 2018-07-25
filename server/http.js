const basicAuth = require("express-basic-auth");
var express = require('express');
var json = require("./json");
var verifyToken = require("./middleware/VerifyToken");
var jwt = require("jsonwebtoken");


var species_routing = express.Router();
species_routing
    .get("/", json.jsonAllSpecies)
    .get("/short", json.jsonAllSpeciesShort)
    .get("/:id", json.jsonGetSpeciesByID)
    .get("/:id/collections", json.jsonGetCollectionBySpeciesID)
    .post("/:id", verifyToken, json.jsonEditSpecies)
    .put("/", verifyToken, json.jsonCreateSpecies)
    .delete("/:id", verifyToken, json.jsonDeleteSpecies);
    //.get("/:id(\d+)", species_handlers.aSpeciesRequested)
    //.post("/", postAuth, species_handlers.aSpeciesCreated);

var collection_routing = express.Router();
collection_routing
    .get("/", json.jsonAllCollections)
    .get("/:id", json.jsonGetCollectionByID)
    .post("/:id", verifyToken, json.jsonEditCollection)
    .put("/", verifyToken, json.jsonCreateCollection)
    .delete("/:id", verifyToken, json.jsonDeleteCollection);

var category_routing = express.Router();
category_routing
    .get("/:category", json.jsonGetSpeciesByCategory)
    .post("/:category", verifyToken, json.jsonEditCategory);

var tag_routing = express.Router();
tag_routing
    .get("/:tag", json.jsonGetSpeciesByTag);

var admin_routing = express.Router();
admin_routing
    .post("/", function(req, res) {
        if(req.body.password == process.env.ADMIN_PASSWORD) {
            //authenticate...
            let token = jwt.sign({user:req.body.username}, process.env.SECRET_KEY, {expiresIn:3600});
            res.cookie("token", token, { maxAge: 3600 * 1000, httpOnly: false });
            res.status(200).json({msg: "Authenticated successfully"});
        } else {
            //authenticate...
            res.status(401).json({msg: "Failed to authenticate"});
        }
    });

module.exports = {
    species_routing, collection_routing, category_routing, admin_routing, tag_routing
};
