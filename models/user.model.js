const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

moongoose.connect(
  "mongodb+srv://smitjogani00:CqRhLNFq0ZFgm0ff@smit.resbqih.mongodb.net/CRUD"
);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
