var express = require('express');
var species_handlers = require("./requests/species");
var specimen_handlers = require("./requests/specimen");
var observation_handlers = require("./requests/observation");
var runQuery = require("./requests/query");

var species_routing = express.Router();
species_routing
    .get("/", species_handlers.allSpeciesRequested)
    //.get("/:id(\d+)", species_handlers.aSpeciesRequested)
    .post("/", species_handlers.aSpeciesCreated);

var specimen_routing = express.Router();
specimen_routing
    .get("/all", specimen_handlers.allSpecimenRequestedFullData);

var query_routing = express.Router();
query_routing
    .post("/", runQuery);

var observation_routing = express.Router();
observation_routing
    .get("/forSpecimen/:sid", observation_handlers.allObservationsForSpecimen);


module.exports = {
    species_routing, specimen_routing, query_routing, observation_routing,
};
