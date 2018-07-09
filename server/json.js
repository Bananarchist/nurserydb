var sql = require("./sql");
var getters = require("./json.get");
var putters = require("./json.put");
var posters = require("./json.post");
var delters = require("./json.delete");

let jsonwrap = function(res, p, log=false) {
    return p.then(
        data => {
            if(log) console.log(data);
            return res.json(data);
        },
        error => {
            console.log(error);
        }
    )
}

function jsonAllSpecies(req, res) {
    jsonwrap(res, getters.getAllSpecies());
}

function jsonAllSpeciesShort(req, res) {
    jsonwrap(res, getters.getAllSpeciesShort());
}

function jsonAllCollections(req, res) {
    jsonwrap(res, getters.getAllCollections());
}

function jsonGetSpeciesByID(req, res) {
    jsonwrap(res, getters.getSpeciesByID(parseInt(req.params.id,10)));
}

function jsonGetSpeciesByTag(req, res) {
    jsonwrap(res, getters.getSpeciesByTag(req.params.tag));
}

function jsonGetSpeciesByCategory(req, res) {
    jsonwrap(res, getters.getSpeciesByCategory(req.params.category));
}

function jsonGetCollectionByID(req, res) {
    jsonwrap(res, getters.getCollectionByID(parseInt(req.params.id,10)));
}

function jsonGetCollectionBySpeciesID(req, res) {
    jsonwrap(res, getters.getCollectionsBySpeciesID(parseInt(req.params.id,10)));
}

function jsonCreateCollection(req, res) {
    //check password
    jsonwrap(res, putters.putCollection(req.body), true);
}

function jsonDeleteCollection(req, res) {
    jsonwrap(res, delters.deleteCollection(parseInt(req.params.id,10)), true);
}

function jsonEditCollection(req, res) {
    jsonwrap(res, posters.postCollection(parseInt(req.params.id, 10), req.body), true);
}

function jsonCreateSpecies(req, res) {
    //check password
    jsonwrap(res, putters.putSpecies(req.body), true);
}

function jsonDeleteSpecies(req, res) {
    jsonwrap(res, delters.deleteSpecies(parseInt(req.params.id,10)), true);
}

function jsonEditSpecies(req, res) {
    jsonwrap(res, posters.postSpecies(parseInt(req.params.id, 10), req.body), true);
}

function jsonEditCategory(req, res) {
    jsonwrap(res, posters.postCategory(req.params.category, req.body), true);
}

module.exports = {
    jsonAllSpecies, jsonAllSpeciesShort, jsonAllCollections, jsonGetSpeciesByID, jsonGetSpeciesByCategory, jsonGetCollectionByID, jsonGetCollectionBySpeciesID, jsonCreateCollection, jsonEditCollection, jsonDeleteCollection, jsonEditSpecies, jsonCreateSpecies, jsonDeleteSpecies, jsonEditCategory, jsonGetSpeciesByTag
}
