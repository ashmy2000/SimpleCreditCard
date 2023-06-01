
//MongoDB Connection 
require('dotenv').config();  


const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const uri = `mongodb+srv://demo:${process.env.MONGODB_PASSWORD}@atlascluster.dxa8hau.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const databaseName = "CreditCard";


  // Initialize Mongoose with the MongoDB connection
  mongoose.connect(uri);
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
  


//Function fetching all data from data
async function dbConnection() {
  let result = await client.connect();
  db = result.db(databaseName);
    console.log('MongoDB database connection established successfully');
  return db.collection("ListOfCreditCards"); 

  // let data = await collection.find({}).toArray();
  // console.log(data);
}

module.exports = dbConnection;
