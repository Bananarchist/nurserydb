var ob_db = require("../db/observation");

function allObservationsForSpecimen(req, res) {
    console.log("Querying for " + req.params.sid + " type: " + typeof req.params.sid);
    ob_db.getObservationsForSpecimen(parseInt(req.params.sid,10)).then(
        data => {
            console.log("Received db data, returning json");
            return res.json(data)});
}

function saveObservationForSpecimen(req, res) {
    //how to delineate between new and update...?
    ob_db.insertObservationForSpecimen(parseInt(req.params.sid,10), {
        comment: req.body.comment,
        status: req.body.status,
        specimen_id: req.params.sid
    }).then(
        data => {
            console.log("submitted data, attempting to return json???");
            return res.json(data)
        }
    );
}

module.exports = {allObservationsForSpecimen, saveObservationForSpecimen};
