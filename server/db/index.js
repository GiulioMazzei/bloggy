const config = require('./db.config')

const Sequelize = require('sequelize')


//create the sequelize model
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
})


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../auth/models/user.model')(sequelize, Sequelize);
db.post = require('../posts-api/models/post.model')(sequelize, Sequelize);


module.exports = db;