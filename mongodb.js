
//MongoDB Connection 

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://demo:demo123@atlascluster.dxa8hau.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const databaseName = "CreditCard";

//Function fetching all data from data
async function dbConnection() {
  let result = await client.connect();
  db = result.db(databaseName);
  return db.collection("ListOfCreditCards");
  // let data = await collection.find({}).toArray();
  // console.log(data);
}

module.exports = dbConnection;
