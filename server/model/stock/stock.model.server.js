const mongoose = require("mongoose");
const StockSchema = require("./stock.schema.server");
const StockModel = mongoose.model("StockModel", StockSchema);

StockModel.createStock = createStock;
StockModel.findStockByBeer = findStockByBeer;
StockModel.findStockByLocation = findStockByLocation;
StockModel.updateStock = updateStock;
StockModel.deleteStock = deleteStock;
StockModel.findStockByBeerAndLocation = findStockByBeerAndLocation;
StockModel.createOrUpdateStock = createOrUpdateStock;

module.exports = StockModel;

function createStock(obj) {
  obj.location = obj.lid;
  return StockModel.create(obj);
}

function createOrUpdateStock(obj) {
  obj.location = obj.lid;
  if (obj._id) {
    // this is an update
    return StockModel.updateStock(obj._id, obj);
  }
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

function findStockByBeerAndLocation(beerId, locId) {
  return StockModel.findOne({location: locId, bid: beerId})
    .populate('location')
    .exec();
}

function updateStock(stockId, obj) {
  obj.updateDate = Date.now();
  return StockModel.update({_id: stockId}, obj);
}

function deleteStock(stockId) {
  return StockModel.findByIdAndRemove(stockId);
}
