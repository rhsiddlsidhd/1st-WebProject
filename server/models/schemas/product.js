const { Schema } = require("mongoose");

const ProductSchema = new Schema({
  product_title: { type: String, required: true },
  product_brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  product_type: {
    type: String,
    required: true,
  },
  product_model_number: {
    type: String,
  },
  product_gender: {
    type: String,
    enum: ["MALE", "FEMALE", "BOTH"],
  },
  product_size: {
    type: String,
  },
  option_groups: {},
  product_reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "ProductReview",
    },
  ],
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
  product_price: {
    type: Number,
    required: true,
  },
  product_discount_ratio: Number,
  product_main_images: [ImageSchema],
  product_detail_images: [ImageSchema],
});

const BrandSchema = new Schema({
  brand_name: {
    type: String,
    required: true,
  },
});

const ProductReviewSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  review_created: {
    type: Date,
    required: true,
  },
  review_updated: {
    type: Date,
    required: true,
  },
});

const OptionGroupSchema = new Schema({});
const OptionSchema = new Schema({});

const ImageSchema = new Schema({
  file_name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
