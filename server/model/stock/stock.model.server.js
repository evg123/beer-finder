const mongoose = require("mongoose");
const BeerSchema = require("./beer.schema.server");
const StockModel = mongoose.model("StockModel", StockSchema);

StockModel.createStock = createStock;
StockModel.findStockByBeer = findStockByBeer;
StockModel.findStockByLocation = findStockByLocation;
StockModel.updateStock = updateStock;
StockModel.deleteStock = deleteStock;

module.exports = StockModel;

function createStock(obj) {
  return StockModel.create(obj);
}

function findStockByBeer(beerId) {
  return StockModel.find({beer: beerId})
    .populate('beer')
    .populate('location')
    .exec();
}

function findStockByLocation(locId) {
  return StockModel.find({location: locId})
    .populate('beer')
    .populate('location')
    .exec();
}

function updateStock(stockId, obj) {
  return StockModel.update({_id: stockId}, obj);
}

function deleteStock(stockId) {
  return StockModel.findByIdAndRemove(stockId);
}
