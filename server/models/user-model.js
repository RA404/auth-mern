const { Schema, model } = require("mongoose");
const ApiError = require("../exceptions/api-error");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require, select: false },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

UserSchema.statics.findUserByCredentials = function checkUser(email, password) {
  return this.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        throw ApiError.BadRequest(
          "Please provide a valid email address and password."
        );
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          throw ApiError.BadRequest(
            "Please provide a valid email address and password."
          );
        }
        return user;
      });
    });
};

module.exports = model("User", UserSchema);
