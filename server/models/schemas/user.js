const { Schema } = require("mongoose");
const { UserRoleType } = require("../enums/user_role");

const UserSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_password: {
    type: password,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_role_type: {
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
