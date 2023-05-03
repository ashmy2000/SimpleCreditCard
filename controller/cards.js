
const mongodb = require("mongodb");
const dbConnection = require("../database/mongodb");

export.getAllCards = async (req, res, next) => {
    let data = await dbConnection();
    data = await data.find({}).toArray();
    // Assume you have a MongoDB collection named "users"
    res.send(data);
  };