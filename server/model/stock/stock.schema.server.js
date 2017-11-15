const mongoose = require("mongoose");

const StockSchema = mongoose.Schema({
  beer: {type: mongoose.Schema.Types.ObjectId, ref: 'BeerModel'},
  location: {type: mongoose.Schema.Types.ObjectId, ref: 'LocationModel'},
  count: Number,
  asOf: Date,
}, {collection: 'stock'});

module.exports = StockSchema;
