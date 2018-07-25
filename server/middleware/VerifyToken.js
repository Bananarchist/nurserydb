var jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    var token = req.header('x-access-token');
    jwt.verify(token, process.env.SECRET_KEY, (e, d) => {
        console.log(token);
        if(e) {
            return res.status(500).send({auth:false,message:"Failed to authenticate"})
        }
        next();

    });
}

module.exports = verifyToken;
