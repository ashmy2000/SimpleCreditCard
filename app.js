const { Console } = require("console");
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const PORT = 7000;
const path = require("path");
const dbConnection = require("./database/mongodb");
const credit_card = path.join(__dirname, "frontend");

// Allows you to recieve data from postman body
app.use(express.json());
app.use(bodyParser.json());
// Fetch data from Mongo through API
app.get("/allCard", async (req, res) => {
  let data = await dbConnection();
  data = await data.find({}).toArray();
  // Assume you have a MongoDB collection named "users"
  res.send(data);
});

// Main page with html
app.get("/", async (req, res) => {
  res.sendFile(`${credit_card}/index.html`);
});


// // Luhn10 Check for credit card
function isValidCreditCardNumber(creditCardNumber) {
  //card number between 12-19 and string. 
  if (!creditCardNumber || typeof creditCardNumber !== 'string' || creditCardNumber.length < 12 || creditCardNumber.length > 19) {
    return false;
  }

  // Remove all non-digit characters from the credit card number

  

const digits = creditCardNumber.replace(/\D/g, '');

  // Check if the remaining characters form a valid Luhn 10 number
  const sum = Array.from(digits).reverse().reduce((acc, digit, i) => {
    const value = parseInt(digit, 10);
    return acc + (i % 2 === 0 ? value : (value < 5 ? value * 2 : (value * 2) - 9));
  }, 0);

  return sum % 10 === 0;
}


app.post("/", async (req, res) => {
  try {
    const creditCardNumber = req.body.card_number;
    if (!isValidCreditCardNumber(creditCardNumber)) {
      console.log(creditCardNumber);
      res.send({ status: "INVALID CREDIT CARD -> Format should be 4444555566667777" });
      console.log("invlid ceredit card")
      return;
    }
  
    let data = await dbConnection();
    let addCard = await data.insertOne(req.body);
  
    console.log(req.body);
    res.send(addCard);


  }catch(e){
    console.log(e);
  }

});

//Update ddb using id in postman body 
app.put("/", async (req, res) => {
  let data = await dbConnection();
  let result = data.updateOne({ id: req.body.id }, { $set: req.body });
  res.send({ status: "updated" });
});

app.delete("/:id", async (req, res) => {
  const data = await dbConnection();
  const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id)});
  res.send({ status: "updated" });
})
//getAllCard();

app.listen(PORT, () => console.log(`LIVE on Localhost on :${PORT}`));
