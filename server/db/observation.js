var SimpleOEM = require("./simple_oem");
var connAndQuery = require("./rest");
var ob_oem = new SimpleOEM("observation", "id", connAndQuery);

function getObservationsForSpecimen(sid) {
    console.log("querying db for observations for specimen "+sid);
    return ob_oem
        .match(`specimen_id=${sid}`)
        .query();
}

function insertObservationForSpecimen(sid, content) {
    let keys = Object.keys(content);
    console.log(`adding observation for specimen(${sid}): ${content}`);
    //sanitize data
    //save
    return ob_oem
        .columns(keys)
        .insert(keys.map(k=>content[k]))
        .query();
}


module.exports = {
    getObservationsForSpecimen, insertObservationForSpecimen
};
