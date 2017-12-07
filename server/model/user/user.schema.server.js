const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  admin: {type: Boolean, default: false},
  username: String,
  password: String,
  google: {
    id:    String,
    token: String
  },
  firstName: String,
  lastName: String,
  email: String,
  thanks: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  reportCount: {type: Number, default: 0},
  locations: [{type: mongoose.Schema.Types.ObjectId, ref: 'LocationModel'}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'user'});

UserSchema.index({username: 'text', firstName: 'text', lastName: 'text', email: 'text'});

module.exports = UserSchema;
