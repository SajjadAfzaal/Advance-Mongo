const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testingadvdbcommands");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: String,
  password: String,
  email: String,
  isMarried: Boolean,
  isAdmin: Boolean,
});

module.exports = mongoose.model("user", userSchema);
