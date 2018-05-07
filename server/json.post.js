var sql = require("./sql");

function postSpecies(record) {
    let id = record.id;
    delete record.id;
    let keys = Object.keys(record);
    return sql(`UPDATE species SET ${keys.map(k=>`k="${record[k]}"`).join(",")} WHERE id=${id}`);
}

function postCollection(record) {
    let id = record.id;
    delete record.id;
    let keys = Object.keys(record);
    return sql(`UPDATE collection SET ${keys.map(k=>`k="${record[k]}"`).join(",")} WHERE id=${id}`);
}


module.exports = {
    postSpecies, postCollection
};
