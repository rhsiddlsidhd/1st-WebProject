const { Schema } = require('mongoose');
const UserSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  user_role: {
    type: String,
    required: true,
    ref: 'Role',
  },
});

module.exports = UserSchema;
