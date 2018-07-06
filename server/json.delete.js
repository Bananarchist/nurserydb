var sql = require("./sql");

function deleteSpecies(id) {
    return Promise.all([
        sql(`DELETE FROM species WHERE id=${id}`),
        sql(`DELETE FROM collection WHERE species_id=${id}`)
    ]);
}

function deleteCollection(id) {
    return sql(`DELETE FROM collection WHERE id=${id}`);
}


module.exports = {
    deleteSpecies, deleteCollection
};
