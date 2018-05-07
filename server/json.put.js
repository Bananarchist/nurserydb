var sql = require("./sql");

function putSpecies(record) {
    let keys = Object.keys(record)
    return sql(`INSERT INTO species (${keys.join(",")}) VALUES (${keys.map(k=>`"${record[k]}"`).join(",")})`);
}

function putCollection(record) {
    let keys = Object.keys(record);
    return sql(`INSERT INTO collection (${keys.join(",")}) VALUES (${keys.map(k=>`"${record[k]}"`).join(",")})`);
}


module.exports = {
    putSpecies, putCollection
};
