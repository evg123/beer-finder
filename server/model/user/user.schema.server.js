const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  dateCreated: Date
}, {collection: 'user'});

module.exports = UserSchema;
