var ob_db = require("../db/observation");

function allObservationsForSpecimen(req, res) {
    console.log("Querying for " + req.params.sid + " type: " + typeof req.params.sid);
    ob_db.getObservationsForSpecimen(parseInt(req.params.sid,10)).then(
        data => {
            console.log("Received db data, returning json");
            return res.json(data)});
}

module.exports = {allObservationsForSpecimen};
