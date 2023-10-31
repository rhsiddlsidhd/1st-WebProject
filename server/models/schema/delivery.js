const { Schema } = require('mongoose');
const DeliverySchema = new Schema({
  delivery_type: {
    type: String,
    required: true,
  },
  delivery_corp: {
    type: String,
    required: true,
  },
  delivery_fee: {
    type: String,
    required: true,
  },
});

module.exports = DeliverySchema;
