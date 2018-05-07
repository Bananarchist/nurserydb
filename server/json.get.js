var sql = require("./sql");

function getAllSpecies() {
    return sql("SELECT * FROM species;");
}

function getAllCollections() {
    return sql("SELECT c.*, s.taxa, s.common FROM collection AS c JOIN species AS s ON c.species_id=s.id;");
}

function getAllCollectionsFull() {
    return sql("SELECT c.*, s.taxa, s.common, s.size as s_size, s.wildlife, s.description, s.category, s.tags FROM collection AS c JOIN species AS s ON c.species_id=s.id;");
}

function getAllPlantTagData() {
    return sql("SELECT c.credit, c.source, c.added_to_inventory, c.price, s.taxa, s.common, s.size, s.description, s.tags FROM collection AS c JOIN species AS s ON c.species_id=s.id;");
}

function getSpeciesByID(id) {
    return sql(`SELECT * FROM species WHERE id=${id};`);
}

function getSpeciesByCategory(category) {
    return sql(`SELECT * FROM species WHERE category="${category}";`);
}

function getCollectionByID(id) {
    return sql(`SELECT c.*, s.taxa, s.common, s.size as s_size, s.wildlife, s.description, s.category, s.tags FROM collection AS c JOIN species AS s ON c.species_id=s.id WHERE c.id=${parseInt(id,10)};`);
}

function getCollectionByIDFull(id) {
    return sql(`SELECT c.*, s.taxa, s.common FROM collection AS c JOIN species AS s ON c.species_id=s.id WHERE c.id=${id};`);
}

function getPlantTagDataByID(id) {
    return sql(`SELECT c.credit, c.source, c.added_to_inventory, c.price, s.taxa, s.common, s.size, s.description, s.tags FROM collection AS c JOIN species AS s ON c.species_id=s.id WHERE c.id=${id};`);
}

function getCollectionsBySpeciesID(s_id) {
    return sql(`SELECT * FROM collection WHERE species_id=${s_id};`);
}

function searchSpeciesByField(field, sstr) {
    return sql(`SELECT * FROM species WHERE ${field} LIKE "%${sstr}%";`);
}

function getSpeciesByTag(tag) {
    return sql(`SELECT * FROM species WHERE tags LIKE "%${tag}%";`);
}

module.exports = {
    getAllSpecies, getAllCollections, getAllCollectionsFull, getAllPlantTagData, getSpeciesByID, getCollectionByID, getCollectionByIDFull, getPlantTagDataByID, searchSpeciesByField, getSpeciesByCategory, getCollectionsBySpeciesID,
}
