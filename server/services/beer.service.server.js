
module.exports = function (app) {

  const axios = require('axios');
  const querystring = require('querystring');
  const BeerModel = require("../model/beer/beer.model.server");
  const StockModel = require("../model/stock/stock.model.server");
  const LocationModel = require("../model/location/location.model.server");

  const untappdSecret = process.env.UNTAPPD_SECRET;
  const untappdId = process.env.UNTAPPD_ID;

  const baseUntappdUrl = 'https://api.untappd.com/v4';

  app.get('/api/beer', findBeersByName);
  app.get('/api/beer/:beerId', findBeerById);
  app.put('/api/beer/:beerId', updateBeer);
  app.delete('/api/beer/:beerId', deleteBeer);
  app.post('/api/beer/:beerId/report', reportBeer);
  app.get('/api/beer/:beerId/stock', findStockByBeer);

  function createBeer(req, res) {
    const obj = req.body;
    BeerModel.createBeer(obj)
      .then(function (data) {
        res.json(data);
      });
  }

  function findBeerById(req, res) {
    const objId = req.params.beerId;
    const url = baseUntappdUrl + '/beer/info/' + objId;
    const qs = querystring.stringify({
      'client_id': untappdId,
      'client_secret': untappdSecret
    });

    axios.get(url + '?' + qs)
      .then(function (response) {
        res.json(response.data.response.beer);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function findBeersByName(req, res) {
    const nameQuery = req.query.query;
    const url = baseUntappdUrl + '/search/beer';
    const qs = querystring.stringify({
      'client_id': untappdId,
      'client_secret': untappdSecret,
      'q': nameQuery
    });

    axios.get(url + '?' + qs)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
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

        // query the beer to fill in some info
        const url = baseUntappdUrl + '/beer/info/' + bid;
        const qs = querystring.stringify({
          'client_id': untappdId,
          'client_secret': untappdSecret
        });
        return axios.get(url + '?' + qs);
      })
      .then(function (data) {
        // fill in
        obj.beerName = data.data.response.beer.beer_name;
        obj.beerStyle = data.data.response.beer.beer_style;

        return StockModel.createStock(obj);
      })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (error) {
        console.log(error);
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
