const { Schema } = require('mongoose');
const { ProductSchema } = require('./products');

const OrderSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  items: {
    type: [String],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  delivery_state: {
    type: String,
    default: '주문 완료',
  },
});

module.exports = OrderSchema;
