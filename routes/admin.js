const express = require("express");

const bodyParser = require("body-parser");

//Ref to controller
const cardController = require('../controller/cards');



//mini express app with the other express.
const router = express.Router();
router.use(bodyParser.json());



//Get's all the existing cards from mongoDB
router.get("/", cardController.getAllCards);


//Adds new credit card with Luhn 10 validation 
router.post("/", cardController.addCard);


//Update db using postman body
router.put("/", cardController.putCard);


//Delete Card using ID
router.delete("/:id", cardController.deleteCard);




module.exports = router;
