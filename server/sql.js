var sql = require("promise-mysql");
var database = "plandy2";
var host = `localhost`;
var auth = require("../auth.js");

function connAndQuery(query) {
    return sql.createConnection({
        host: host,
        user: `${auth.username}`,
        password: `${auth.password}`,
        database: database
    }).then(function(conn) {
        var result = conn.query(query);
        conn.end();
        return result;
    }).catch(function() {
        console.log(`Query "${query}" failed`, arguments);
        return Promise.reject({msg: "query failed"});
    });
}

module.exports = connAndQuery;
