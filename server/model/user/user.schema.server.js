const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  admin: {type: Boolean, default: false},
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  locations: [{type: mongoose.Schema.Types.ObjectId, ref: 'LocationModel'}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'user'});

UserSchema.index({username: 'text', firstName: 'text', lastName: 'text', email: 'text'});

module.exports = UserSchema;
