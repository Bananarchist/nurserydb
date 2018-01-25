var SimpleOEM = require("./simple_oem");
var connAndQuery = require("./rest");
var specimen_oem = new SimpleOEM("specimen", "id", connAndQuery);


function getAllSpecimensWithObservationCount() {
    return specimen_oem.conn(`SELECT n.id, n.species_id, n.quantity, n.size, n.created, n.planter, n.source, n.location, s.genus, s.species, COUNT(o.id) as totalObservations, MAX(o.created) as lastObservationMade, MAX(o.id) as lastObservationID from specimen AS n JOIN species AS s ON s.id=n.species_id right JOIN observation AS o ON o.specimen_id=n.id GROUP BY n.id;`);
}


module.exports = {
    getAllSpecimensWithObservationCount
};
