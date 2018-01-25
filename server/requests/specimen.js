var specimen_db = require("../db/specimen");

function allSpecimenRequestedFullData(req, res) {
    specimen_db.getAllSpecimensWithObservationCount().then(
        data => res.json(data));
}

module.exports = {allSpecimenRequestedFullData}
