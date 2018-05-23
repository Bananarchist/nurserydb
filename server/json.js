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

function jsonAllSpeciesShort(req, res) {
    getters.getAllSpeciesShort()
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

function jsonCreateCollection(req, res) {
    //check password
    //post
/*    putters.putCollection(req.body)
    .then(
        data =>
        {
            console.log(data);
            return res.json(data);
        }
    )
    .catch(data=>{console.log(data);})*/
    return res.json({msg:"Still in progress!"});
}

function jsonDeleteCollection(req, res) {
    //check password
/*    delters.deleteCollection(parseInt(req.params.id,10))
    .then(
        data => {
            return res.json(data);
        }
    )
    .catch(
        data => {
            console.log(data);
        }
    )*/
    return res.json({msg:"Still in progress!"});
}

function jsonEditCollection(req, res) {
    //check password
    //post
    /*posters.postCollection(parseInt(req.params.id, 10), req.body)
    .then(
        data =>
        {
            console.log(data);
            return res.json(data);
        }
    )
    .catch(data=>{console.log(data);})*/
    return res.json({msg:"Still in progress!"});
}

module.exports = {
    jsonAllSpecies, jsonAllSpeciesShort, jsonAllCollections, jsonGetSpeciesByID, jsonGetSpeciesByCategory, jsonGetCollectionByID, jsonGetCollectionBySpeciesID, jsonCreateCollection, jsonEditCollection, jsonDeleteCollection
}
