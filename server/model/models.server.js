const mongoose = require('mongoose');

let connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
if (process.env.MLAB_USERNAME_WEBDEV) {
  // running remotely
  const username = process.env.MLAB_USERNAME_WEBDEV;
  const password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds257495.mlab.com:57495/heroku_zlqr6hw8';
}

const db = mongoose.connect(connectionString);

module.exports = db;
