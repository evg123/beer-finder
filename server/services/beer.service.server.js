
module.exports = function (app) {

  const BeerModel = require("../model/beer/beer.model.server");
  const StockModel = require("../model/stock/stock.model.server");
  const LocationModel = require("../model/location/location.model.server");

  app.post('/api/beer', createBeer);
  app.get('/api/beer/:beerId', findBeerById);
  app.put('/api/beer/:beerId', updateBeer);
  app.delete('/api/beer/:beerId', deleteBeer);
  app.post('/api/beer/:beerId/report', reportBeer);
  app.post('/api/beer/:beerId/stock', findStockByBeer);

  function createBeer(req, res) {
    const obj = req.body;
    BeerModel.createBeer(obj)
      .then(function (data) {
        res.json(data);
      });
  }

  function findBeerById(req, res) {
    const objId = req.params.beerId;

    BeerModel.findBeerById(objId)
      .then(function (data) {
        res.json(data);
      });
  }

  function findBeersByName(req, res) {
    const nameQuery = req.query.nameQuery;

    BeerModel.findBeersByName(nameQuery)
      .then(function (data) {
        res.json(data);
      });
  }

  function updateBeer(req, res) {
    const objId = req.params.beerId;
    const obj = req.body;

    BeerModel.updateBeer(objId, obj)
      .then(function (data) {
        res.json(data);
      });
  }

  function deleteBeer(req, res) {
    const objId = req.params.beerId;

    BeerModel.deleteBeer(objId)
      .then(function (data) {
        res.json(data);
      });
  }

  function reportBeer(req, res) {
    const obj = req.body;
    const bid = obj.bid;
    const lid = obj.lid;

    // make sure location exists
    LocationModel.findLocationById(lid)
      .then(function (data) {
        if (!data) {
          res.status(400).send("Location not found!");
        }
        BeerModel.findBeerById(bid)
      })
      .then(function (data) {
        if (!data) {
          res.status(400).send("Beer not found!");
        }
        return StockModel.createStock(obj);
      })
      .then(function (data) {
        res.json(data);
      });
  }

  function findStockByBeer(req, res) {
    const objId = req.params.beerId;

    StockModel.findStockByBeer(objId)
      .then(function (data) {
        res.json(data);
      });
  }
};
