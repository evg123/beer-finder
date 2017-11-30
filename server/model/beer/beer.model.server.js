const mongoose = require("mongoose");
const BeerSchema = require("./beer.schema.server");
const BeerModel = mongoose.model("BeerModel", BeerSchema);

BeerModel.createBeer = createBeer;
BeerModel.findBeerById = findBeerById;
BeerModel.findBeersByName = findBeersByName;
BeerModel.updateBeer = updateBeer;
BeerModel.deleteBeer = deleteBeer;

module.exports = BeerModel;

function createBeer(obj) {
  return BeerModel.create(obj);
}

function findBeerById(locId) {
  return BeerModel.findById(locId);
}

function findBeersByName(query) {
  return BeerModel.find({name: query});
}

function updateBeer(locId, obj) {
  return BeerModel.update({_id: locId}, obj);
}

function deleteBeer(locId) {
  return BeerModel.findByIdAndRemove(locId);
}
