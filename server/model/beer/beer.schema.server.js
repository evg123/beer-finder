const mongoose = require("mongoose");

const BeerSchema = mongoose.Schema({
  name: String,
  dateCreated: Date
}, {collection: 'user'});

module.exports = BeerSchema;
