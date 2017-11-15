const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  name: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  stock: [{type: mongoose.Schema.Types.ObjectId, ref: 'StockModel'}],
  dateCreated: Date
}, {collection: 'location'});

module.exports = LocationSchema;
