var SimpleOEM = require("./simple_oem");
var connAndQuery = require("./rest");
var specimen_oem = new SimpleOEM("specimen", "id", connAndQuery);


function getAllSpecimensWithObservationCount() {
    return specimen_oem.conn(`SELECT n.id, n.species_id, n.quantity, n.size, n.created, n.planter, n.source, n.location, s.genus, s.species, COUNT(o.id) as totalObservations, MAX(o.created) as lastObservationMade, MAX(o.id) as lastObservationID from specimen AS n JOIN species AS s ON s.id=n.species_id left JOIN observation AS o ON o.specimen_id=n.id GROUP BY n.id;`);
}

function insertSpecimenData(data, id) {
    if(id) {
        console.log(`trying to update data of specimen#${id}`);
        return specimen_oem
            .conn(`UPDATE specimen SET ${Object.keys(data).map(k=>`${k}="${data[k]}"`).join(", ")} WHERE id=${id}`);
    } else {
        console.log("trying to add new record to specimens");
        return specimen_oem
            .columns(Object.keys(data))
            .insert(Object.keys(data).map(k=>data[k]))
            .query();
    }
}

function deleteSpecimen(id) {
    return specimen_oem.conn(`DELETE FROM specimen WHERE id=${id}`);
}

module.exports = {
    getAllSpecimensWithObservationCount, insertSpecimenData, deleteSpecimen
};
