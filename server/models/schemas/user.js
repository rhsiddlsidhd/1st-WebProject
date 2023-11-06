const { Schema } = require("mongoose");
const { UserRoleType } = require("../enums/user_role");
const shortId = require("../../utils/shortId");
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: password,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role_type: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
    required: true,
  },
  addresses: {
    type: [AddressSchema],
  },
});

const AddressSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  post_code: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    required: true,
  },
});

module.exports = {
  UserSchema,
  AddressSchema,
};
