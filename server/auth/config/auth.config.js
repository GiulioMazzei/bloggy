//require environment variables
require('dotenv').config();

//export the secret key (needed for JWT encoding process)
module.exports = {
    secret: process.env.SECRET_KEY,
}