var sql = require("promise-mysql");
var database = "plandy2";
var host = `localhost`;
if(!process.env.production) {
    var auth = require("../auth.js");
}


function connAndQuery(query) {
    return sql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
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
