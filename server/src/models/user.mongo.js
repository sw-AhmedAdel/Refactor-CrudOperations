const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const User = mongoose.model("Test", userSchema);
module.exports = User;
