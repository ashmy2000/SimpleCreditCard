const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    card_number: {
      type: String,
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      required: true,
      //as requested to be default if nothing entered
      default: 0,
    },
    limit: {
      type: Number,
      required: true,
    },
    //already defined colletion name in MongoDB
  },
  { collection: "CreditCard" }
);

module.exports = mongoose.model("CreditCard", creditCardSchema);
