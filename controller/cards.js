const mongodb = require("mongodb");
const dbConnection = require("../database/mongodb");
// import the functions from the creditCardChecker module
const isValidCreditCardNumber = require("../controller/crediCardChecker");
//Models Schema
const CreditCard = require("../models/cardModels");

exports.getAllCards = async (req, res, next) => {
  let data = await dbConnection();
  data = await data.find({}).toArray();
  // Assume you have a MongoDB collection named "users"
  res.send(data);
};

exports.addCard = async (req, res) => {
  try {
    const creditCardNumber = req.body.card_number;
    if (!isValidCreditCardNumber(creditCardNumber)) {
      console.log(creditCardNumber);
      res.send({
        status: "INVALID CREDIT CARD -> Format should be 4444555566667777",
      });
      console.log("invalid credit card");
      return;
    }

    const newCreditCard = new CreditCard({
      name: req.body.name,
      card_number: req.body.card_number,
      balance: req.body.balance || 0,
      limit: req.body.limit,
    });

    let data = await dbConnection();
    let addCard = await data.insertOne(newCreditCard);

    console.log(newCreditCard);
    res.send(addCard);
  } catch (e) {
    console.log(e);
  }
};

exports.putCard = async (req, res) => {
  let data = await dbConnection();
  let result = data.updateOne({ id: req.body.id }, { $set: req.body });
  res.send({ status: "updated" });
};

exports.deleteCard = async (req, res) => {
  const data = await dbConnection();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send({ status: "updated" });
};
