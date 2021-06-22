const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const db = require('../../db/index')
const User = db.user

const authConfig = require('../config/auth.config')


//signup functionality
exports.signup = (req, res) => {
    try {
        //save the user to the DB
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8), //hash the password
        }).then(() =>
            res.status(200).send({ message: 'User Create Successfully' })
        );
    } catch (err) {
        //if there is an error send a message back to the client
        res.status(500).send({ message: err });
    }
};


//signin functionality
exports.signin = (req, res) => {
    try {
        User.findOne({
            where: {
                username: req.body.username,
            },
        }).then((user) => {

            //if a user isn't found send a message back
            if (!user) return res.status(404).send({ message: 'User Not Found' });
    
            //compare the email given by the user and the one in the DB
            let emailIsValid = req.body.email === user.email;
    
            //compare the password given by the user and the one in the DB
            let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  
            if (!passwordIsValid || !emailIsValid) {
                //if one of the two or both credentials are wrong send a message back to the client
                return res.status(401).send({ accessToken: null, message: 'Wrong Email or Password' });
            }
  
            let token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400, //expires in 1 day
            });
  
            //if there are no errors and the user has logged in send to the client his info
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                accessToken: token,
            });

        });
    } catch (err) {
        res.status(500).send({ message: err });
    }
  };


//retrieve all the usernames
exports.getAllProfiles = (req, res) => {

    User.findAll({
        where: {}, 
    })
        .then((data) => res.send(data.map((obj) => obj.username))) //take only the usernames
        .catch((err) => {
            res.status(500).send({ message: err.message || 'Some Error Occurred While Retriving Profiles.' });
        });

}