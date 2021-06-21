const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const db = require('./db/index')
db.sequelize.sync();

const app = express()



//middleware

//cors
app.use(cors({ origin: 'http://localhost:3000' }));

//parse requests of content-type: application/json
app.use(bodyParser.json());

//parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



//home route
app.get('/', (req, res) => res.send({ message: 'welcome to the Bloggy API' }));

//auth routes
require('./auth/routes/auth.routes')(app);



//listen for requests
const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
