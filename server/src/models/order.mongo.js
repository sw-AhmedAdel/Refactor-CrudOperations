const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  nameOrder: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Order = mongoose.model("Test2", orderSchema);
module.exports = Order;
