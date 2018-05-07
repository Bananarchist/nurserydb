var connAndQuery = require("../db/rest");

function runQuery(req, res) {
    connAndQuery(req.body.query)
        .then(data => res.json(data))
        .catch(data => res.json(data));
}

module.exports = runQuery;
