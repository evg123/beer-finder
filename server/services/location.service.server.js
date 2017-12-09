
module.exports = function (app) {

  const LocationModel = require("../model/location/location.model.server");
  const StockModel = require("../model/stock/stock.model.server");

  app.post('/api/loc', createLocation);
  app.get('/api/loc', findLocationsByName);
  app.get('/api/loc/:locId', findLocationById);
  app.put('/api/loc/:locId', updateLocation);
  app.delete('/api/loc/:locId', deleteLocation);
  app.get('/api/loc/:locId/stock', findStockByLocation);

  function createLocation(req, res) {
    const obj = req.body;

    LocationModel.createLocation(obj)
      .then(function (data) {
        res.json(data);
      });
  }

  function findLocationById(req, res) {
    const objId = req.params.locId;

    LocationModel.findLocationById(objId)
      .then(function (data) {
        res.json(data);
      });
  }

  function findLocationsByName(req, res) {
    const nameQuery = req.query.query;

    LocationModel.find({$text: {$search: nameQuery}})
      .then(function (data) {
        res.json(data);
      });
  }

  function updateLocation(req, res) {
    const objId = req.params.locId;
    const obj = req.body;

    LocationModel.updateLocation(objId, obj)
      .then(function (data) {
        res.json(data);
      });
  }

  function deleteLocation(req, res) {
    const objId = req.params.locId;

    LocationModel.deleteLocation(objId)
      .then(function (data) {
        res.json(data);
      });
  }

  function findStockByLocation(req, res) {
    const objId = req.params.locId;

    StockModel.findStockByLocation(objId)
      .then(function (data) {
        res.json(data);
      });
  }
};
