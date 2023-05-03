const { Console } = require("console");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 7000;


app.use(bodyParser.json());

//import routes
const adminRoutes = require("./routes/admin");
//import routes from frontend
const adminRoutesFrontend = require("./routes/frontend");

app.use(adminRoutes);
app.use(adminRoutesFrontend);


app.listen(PORT, () => console.log(`LIVE on Localhost on :${PORT}`));
