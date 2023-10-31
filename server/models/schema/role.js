const { Schema } = require('mongoose');
const RoleSchema = new Schema({
  role_type: {
    type: String,
  },
});

module.exports = RoleSchema;
