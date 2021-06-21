const db = require('../../db/index')

const User = db.user


checkDuplicateUsernameOrEmail = (req, res, next) => {

    //check for username duplicates
    User.findOne({
        where: {
          username: req.body.username,
        },
    }).then((user) => {

        if (user) {
            //if there are duplicates then send a message back
            res.status(400).send({ message: 'Username Already Exists' });
            return;
        }
    
        //check for email duplicates
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then((user) => {

            if (user) {
                //if there are duplicates then send a message back
                res.status(400).send({ message: 'Email Already Exists' });
                return;
            }
    
          //if there aren't duplicates then go to the next middleware
          next();
        });
      });
}


const verifySignUp = { checkDuplicateUsernameOrEmail };

//export the middleware  
module.exports = verifySignUp;
  