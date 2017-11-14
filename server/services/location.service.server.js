
module.exports = function (app) {

  var LocationModel = require("../model/location/location.model.server");

  app.post('/api/loc', createLocation);
  app.get('/api/loc/:locId', findLocationById);
  app.put('/api/loc/:locId', updateLocation);
  app.delete('/api/loc/:locId', deleteLocation);

  function createLocation(req, res) {
    var obj = req.body;
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

  function updateLocation(req, res) {
    const objId = req.params.locId;
    var obj = req.body;

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
};
