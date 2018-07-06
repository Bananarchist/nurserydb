var sql = require("./sql");

function postSpecies(id, record) {
    let keys = Object.keys(record)
    return sql(`UPDATE species SET ${keys.map(k=>`${k}="${record[k]}"`).join(",")} WHERE id=${id}`);
}

function postCollection(id, record) {
    let keys = Object.keys(record);
    return sql(`UPDATE collection SET ${keys.map(k=>`${k}="${record[k]}"`).join(",")} WHERE id=${id}`);
}

function postCategory(category, record) {
    let keys = Object.keys(record);
    return sql(`UPDATE species SET category="${record.category}" WHERE category=${category}`);
}

module.exports = {
    postSpecies, postCollection, postCategory
};
