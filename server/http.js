var express = require('express');
var json = require("./json");

var species_routing = express.Router();
species_routing
    .get("/", json.jsonAllSpecies)
    .get("/:id", json.jsonGetSpeciesByID)
    .get("/:id/collections", json.jsonGetCollectionBySpeciesID);
    //.get("/:id(\d+)", species_handlers.aSpeciesRequested)
    //.post("/", species_handlers.aSpeciesCreated);

var collection_routing = express.Router();
collection_routing
    .get("/", json.jsonAllCollections)
    .get("/:id", json.jsonGetCollectionByID);

var category_routing = express.Router();
category_routing
    .get("/:category", json.jsonGetSpeciesByCategory);
/*
var specimen_routing = express.Router();
specimen_routing
    .get("/all", specimen_handlers.allSpecimenRequestedFullData)
    .post("/", specimen_handlers.aSpecimenCreated)
    .put("/:sid", specimen_handlers.aSpecimenModified)
    .delete("/:sid", specimen_handlers.aSpecimenDeleted);

var query_routing = express.Router();
query_routing
    .post("/", runQuery);

var observation_routing = express.Router();
observation_routing
    .get("/forSpecimen/:sid", observation_handlers.allObservationsForSpecimen)
    .post("/forSpecimen/:sid", observation_handlers.saveObservationForSpecimen);

*/
module.exports = {
    species_routing, collection_routing, category_routing
};
