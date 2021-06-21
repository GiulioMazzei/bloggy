const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.config')

const db = require('../../db/index')
const User = db.user


//create the verifyToken middleware
verifyToken = (req, res, next) => {

    //take the token from the request object (in the Header)
    let token = req.headers['x-access-token'];

    //if the token doesn't exist send a message back to the client
    if (!token) return res.status(403).send({ messsage: 'No Token Provided' });

    //use jwt to verify that the token belongs to a specific user
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ message: 'Unauthorized' });
        req.userId = decoded.id;
        next(); //go the the next middleware
    });

}


const authJwt = { verifyToken };

//export the middleware
module.exports = authJwt;
  