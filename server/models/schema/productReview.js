const { Schema } = require('mongoose');
const ProductReviewSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  user_name: {
    type: String,
    required: true,
    ref: 'User',
  },
  review_createdAt: {
    type: Date,
    required: true,
  },
  review_updatedAt: {
    type: Date,
  },
});

module.exports = ProductReviewSchema;
