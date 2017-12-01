const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  name: String,
  description: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  stock: [{type: mongoose.Schema.Types.ObjectId, ref: 'StockModel'}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'location'});

LocationSchema.index({name: 'text'});

module.exports = LocationSchema;
