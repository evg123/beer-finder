const mongoose = require("mongoose");

const StockSchema = mongoose.Schema({
  bid: Number,
  beerName: String,
  beerStyle: String,
  location: {type: mongoose.Schema.Types.ObjectId, ref: 'LocationModel'},
  count: Number,
  asOf: {type: Date, default: Date.now},
  updateDate: {type: Date, default: Date.now}
}, {collection: 'stock'});

module.exports = StockSchema;
