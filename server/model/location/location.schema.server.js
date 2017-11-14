const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  name: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  dateCreated: Date
}, {collection: 'user'});

module.exports = LocationSchema;
