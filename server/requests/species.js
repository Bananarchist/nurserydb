var species_db = require("../db/species");

function aSpeciesRequested(req, res) {
    species_db.getSpecies(parseInt(req.params.id,10)).then(data=>res.json(data));
}

function allSpeciesRequested(req, res) {
    species_db.getAllSpecies().then(data=>res.json(data));
}

function aSpeciesCreated(req, res) {
    console.log("Trying to create a species", req.body);
    species_db.createSpecies(req.body).then(data=>res.json(data));
}

module.exports = {
    aSpeciesCreated, aSpeciesRequested, allSpeciesRequested
};
