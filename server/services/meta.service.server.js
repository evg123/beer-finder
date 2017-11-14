
module.exports = function (app) {

  app.get('/api/untappd-info', getUntappdInfo);

  function getUntappdInfo(req, res) {
    data = {
      clientId: process.env.UNTAPPD_ID,
      clientSecret: process.env.UNTAPPD_SECRET
    };
    res.json(data);
  }
};
