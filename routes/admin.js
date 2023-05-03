const express = require("express");
const mongodb = require("mongodb");
const dbConnection = require("../database/mongodb");
const bodyParser = require("body-parser");

// import the functions from the creditCardChecker module
const isValidCreditCardNumber = require("../controller/crediCardChecker");

//mini express app with the other express.
const router = express.Router();
router.use(bodyParser.json());






router.get("/allCard", async (req, res) => {
  let data = await dbConnection();
  data = await data.find({}).toArray();
  // Assume you have a MongoDB collection named "users"
  res.send(data);
});




router.post("/", async (req, res) => {
  try {
    const creditCardNumber = req.body.card_number;
    if (!isValidCreditCardNumber(creditCardNumber)) {
      console.log(creditCardNumber);
      res.send({
        status: "INVALID CREDIT CARD -> Format should be 4444555566667777",
      });
      console.log("invlid ceredit card");
      return;
    }

    let data = await dbConnection();
    let addCard = await data.insertOne(req.body);

    console.log(req.body);
    res.send(addCard);
  } catch (e) {
    console.log(e); 
  }
});




//Update ddb using id in postman body
router.put("/", async (req, res) => {
  let data = await dbConnection();
  let result = data.updateOne({ id: req.body.id }, { $set: req.body });
  res.send({ status: "updated" });
});




router.delete("/:id", async (req, res) => {
  const data = await dbConnection();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send({ status: "updated" });
});




module.exports = router;
