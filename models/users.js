const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
    },
    timeOfBirth: {
      type: String,
    },
    gender: {
      type: String,
    },
    language: {
      type: String,
    },
    married: {
      type: Boolean,
    },
    profile_pic_url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
var Users = mongoose.model("User", userSchema);
module.exports = Users;
