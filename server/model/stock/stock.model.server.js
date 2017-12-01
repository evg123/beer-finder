const mongoose = require("mongoose");
const StockSchema = require("./stock.schema.server");
const StockModel = mongoose.model("StockModel", StockSchema);

StockModel.createStock = createStock;
StockModel.findStockByBeer = findStockByBeer;
StockModel.findStockByLocation = findStockByLocation;
StockModel.updateStock = updateStock;
StockModel.deleteStock = deleteStock;

module.exports = StockModel;

function createStock(obj) {
  obj.location = obj.lid;
  return StockModel.create(obj);
}

function findStockByBeer(beerId) {
  return StockModel.find({bid: beerId})
    .populate('location')
    .exec();
}

function findStockByLocation(locId) {
  return StockModel.find({location: locId})
    .populate('location')
    .exec();
}

function updateStock(stockId, obj) {
  return StockModel.update({_id: stockId}, obj);
}

function deleteStock(stockId) {
  return StockModel.findByIdAndRemove(stockId);
}
