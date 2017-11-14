const mongoose = require("mongoose");
const LocationSchema = require("./location.schema.server");
const LocationModel = mongoose.model("LocationModel", LocationSchema);

LocationModel.createLocation = createLocation;
LocationModel.findLocationById = findLocationById;
LocationModel.updateLocation = updateLocation;
LocationModel.deleteLocation = deleteLocation;

module.exports = LocationModel;

function createLocation(obj) {
  return LocationModel.create(obj);
}

function findLocationById(locId) {
  return LocationModel.findById(locId);
}

function updateLocation(locId, obj) {
  return LocationModel.update({_id: locId}, obj);
}

function deleteLocation(locId) {
  return LocationModel.findByIdAndRemove(locId);
}