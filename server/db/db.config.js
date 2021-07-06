//require environment variables
require('dotenv').config();

//config for the DB
module.exports = {

    HOST: 'eu-cdbr-west-01.cleardb.com', //process.env.DB_HOST
    USER: 'b854de145ae131', //process.env.DB_USER
    PASSWORD: 'b63fd96e', //process.env.DB_PASSWORD
    DB: 'heroku_9064a3714d3d8e7', //process.env.DB_NAME
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    
};
  

//mysql://b854de145ae131:b63fd96e@eu-cdbr-west-01.cleardb.com/heroku_9064a3714d3d8e7?reconnect=true