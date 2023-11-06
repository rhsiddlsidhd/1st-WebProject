const { Schema } = require("mongoose");

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
const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    model_number: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "BOTH"],
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    option_groups: {},
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    delivery_type: {
      type: String,
      // required: true,
    },
    delivery_corp: {
      type: String,
      // required: true,
    },
    delivery_fee: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product_discount_ratio: {
      type: Number,
    },
    main_images: [ImageSchema],
    detail_images: [ImageSchema],
  },
  {
    timestamps: true,
  }
);

const OptionGroupSchema = new Schema({});
const OptionSchema = new Schema({});

module.exports = {
  ProductSchema,
  OptionGroupSchema,
  OptionSchema,
  ImageSchema,
};
