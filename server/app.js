
module.exports = function(app) {
  const db = require("./model/models.server");
  require("./services/meta.service.server.js")(app);
  require("./services/user.service.server.js")(app);
  require("./services/beer.service.server.js")(app);
  require("./services/location.service.server.js")(app);
};
