const { Schema } = require('mongoose');
<<<<<<< HEAD

=======
const { UserRoleType } = require('../enums/user_role');
const shortId = require('../../utils/shortId');
>>>>>>> feature/products
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
<<<<<<< HEAD
=======
    enum: ['ADMIN', 'USER'],
    default: 'USER',
>>>>>>> feature/products
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  role_type: {
    type: String,
    default: 'USER',
    required: true,
  },
});

module.exports = UserSchema;
