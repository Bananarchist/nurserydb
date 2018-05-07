var specimen_db = require("../db/specimen");

function allSpecimenRequestedFullData(req, res) {
    specimen_db.getAllSpecimensWithObservationCount().then(
        data => res.json(data));
}

function aSpecimenModified(req, res) {
    specimen_db.insertSpecimenData(req.body, parseInt(req.params.sid,10)).then(
        data => res.json(data)
    );
}

function aSpecimenCreated(req, res) {
    specimen_db.insertSpecimenData(req.body).then(
        data => res.json(data)
    );
}

function aSpecimenDeleted(req, res) {
    specimen_db.deleteSpecimen(parseInt(req.params.sid, 10)).then(
        data => res.json(data)
    );
}

module.exports = {allSpecimenRequestedFullData, aSpecimenCreated, aSpecimenModified, aSpecimenDeleted}
