const { Console } = require("console");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 7000;


app.use(bodyParser.json());

//import routes
const adminRoutes = require("./routes/admin");



//Incoming req goes to adminRoutes...
app.use(adminRoutes);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.listen(PORT, () => console.log(`LIVE on Localhost on :${PORT}`));
