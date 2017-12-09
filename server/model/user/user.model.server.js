const mongoose = require("mongoose");
const UserSchema = require("./user.schema.server");
const UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByGoogleId = findUserByGoogleId;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.thankUser = thankUser;
UserModel.updateReportCount = updateReportCount;

module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findById(userId)
    .populate('thanks')
    .populate('locations')
    .exec();
}

function findUserByGoogleId(googleId) {
  return UserModel.findOne({'google.id': googleId})
    .populate('thanks')
    .populate('locations')
    .exec();
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.findByIdAndRemove(userId);
}

function thankUser(fromId, toId) {
  return UserModel.update({_id: toId}, {$addToSet: {thanks: fromId}});
}

function updateReportCount(userId, countMod) {
  return UserModel.findOneAndUpdate({_id: userId}, { $inc: {reportCount: countMod}});
}
