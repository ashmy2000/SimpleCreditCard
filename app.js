const { Console } = require("console");
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const PORT = 7000;
const path = require("path");
const dbConnection = require("./database/mongodb");
const credit_card = path.join(__dirname, "frontend") ;
app.use(bodyParser.json());
//import routes 
const adminRoutes = require('./routes/admin');
//import routes from frontend
const adminRoutesFrontend = require('./routes/frontend');

app.use(adminRoutes);
app.use(adminRoutesFrontend);

// Allows you to recieve data from postman body
app.use(express.json());
app.use(bodyParser.json());


//APP.GET /ALLCARDS

// Fetch data from Mongo through API


//GET /







//POST /


//PUT /



//DELETE /:id

//getAllCard();

app.listen(PORT, () => console.log(`LIVE on Localhost on :${PORT}`));
