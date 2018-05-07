var sql = require("./sql");
var getters = require("./json.get");
var putters = require("./json.put");
var posters = require("./json.post");
var delters = require("./json.delete");

function jsonAllSpecies(req, res) {
    getters.getAllSpecies()
    .then(
        data => {
            return res.json(data);
        }
    );
}

function jsonAllCollections(req, res) {
    getters.getAllCollections()
    .then(
        data => {
            return res.json(data);
        }
    );
}

function jsonGetSpeciesByID(req, res) {
    getters.getSpeciesByID(parseInt(req.params.id,10))
    .then(
        data => {
            return res.json(data);
        }
    );
}

function jsonGetSpeciesByCategory(req, res) {
    getters.getSpeciesByCategory(req.params.category)
    .then(
        data => {
            return res.json(data);
        }
    );
}

function jsonGetCollectionByID(req, res) {
    getters.getCollectionByID(parseInt(req.params.id,10))
    .then(
        data => {
            return res.json(data);
        }
    );
}

function jsonGetCollectionBySpeciesID(req, res) {
    getters.getCollectionsBySpeciesID(parseInt(req.params.id,10))
    .then(
        data => {
            return res.json(data);
        }
    );
}

module.exports = {
    jsonAllSpecies, jsonAllCollections, jsonGetSpeciesByID, jsonGetSpeciesByCategory, jsonGetCollectionByID, jsonGetCollectionBySpeciesID
}
