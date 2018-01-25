var SimpleOEM = require("./simple_oem");
var connAndQuery = require("./rest");
var ob_oem = new SimpleOEM("observation", "id", connAndQuery);

function getObservationsForSpecimen(sid) {
    console.log("querying db for observations for specimen "+sid);
    return ob_oem.match(`specimen_id=${sid}`).query();
}


module.exports = {
    getObservationsForSpecimen
};
