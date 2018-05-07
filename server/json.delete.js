var sql = require("./sql");

function deleteSpecies(id) {
    return sql(`DELETE FROM species WHERE id=${id}`);
}

function deleteCollection(id) {
    return sql(`DELETE FROM collection WHERE id=${id}`);
}


module.exports = {
    deleteSpecies, deleteCollection
};
