const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

moongoose.connect(
  "mongo connection string"
);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
