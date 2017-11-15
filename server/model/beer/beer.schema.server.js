const mongoose = require("mongoose");

const BeerSchema = mongoose.Schema({
  name: String,
  untappdId: Number,
  dateCreated: Date
}, {collection: 'beer'});

module.exports = BeerSchema;
