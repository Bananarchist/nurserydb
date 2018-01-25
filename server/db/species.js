var SimpleOEM = require("./simple_oem");
var connAndQuery = require("./rest");
var species_oem = new SimpleOEM("species", "id", connAndQuery);

function getSpecies(id) {
    return species_oem.getByPk(id).query();
}

function getAllSpecies() {
    return species_oem.query();
}

function createSpecies(data) {
    let keys = Object.keys(data);
    keys.sort();
    return species_oem.columns(...keys).insert(...keys.map(k=>data[k])).query();
}


module.exports = {
    getSpecies, getAllSpecies, createSpecies,
};
