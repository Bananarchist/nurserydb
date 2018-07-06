const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const routing = require("./server/http");
const session = require("express-session");
const basicAuth = require("basic-auth"); //require("express-basic-auth");
const app = express();
var port = process.env.PORT || 8080;


//if(process.env.production) {
    /*app.use(basicAuth({
        users: {
            "admin": "1994",
        },
        "challenge": true,
        authorizeAsync: true,
        authorizer(sn, pw, cb) {
            if(sn.toLowerCase()=="admin" && pw=="1994") {
                return cb(null, true);
            } else {
                return cb(null, false);
            }
        },
        unauthorizedResponse(req) {
            return req.auth ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected') : 'No credentials provided';
        }
    }));*/
    //app.use(session({secret:"hello",resave:true,saveUninitialized:true}));
    app.use(cookieParser());
    /*app.use(function(req, res, next) {
        var user = basicAuth(req);
        if(!user) {
            res.set("WWW-Authenticate", `Basic realm="noobs"`);
            return res.status(401).send("No creds provided");
        }
        if(user.name != "admin" || user.pass != "1994") {
            return res.status(401).send(`Authentication for ${user.name} and ${user.pass} failed`);
        }
        if(!req.session || !req.session.user || !req.session.pass) {
            req.session.user = user.name;
            req.session.password = user.pass;
        }
        console.log(req.cookies);
        return next();
    });*/

//}


app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/collection", routing.collection_routing);
app.use("/species", routing.species_routing);
app.use("/category", routing.category_routing);
app.use("/authenticate", routing.admin_routing);

app.listen(port, () => {
    console.log(`Server running @ http://localhost:${port}`);
});

module.exports = app;
