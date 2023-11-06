const { Product } = require("../models");
const catchAsync = require("../utils/catchAsync");

const getProductById = async (product_id) => {
  const product = await Product.findOne({ shortId: product_id });

  return product;
};
const getProducts = async (page) => {
  const perPage = 30;
  const total = await Product.countDocuments();
  const products = await Product.find({})
    .sort({ createdAt: -1 })
    .skip(perPage * (page - 1))
    .limit(perPage);

  return products;
};

const createProduct = async (body) => {
  console.log("create Product!");
  const product = new Product({
    ...body,
  });
  console.log("create Product!");
  const result = await product.save();
  console.log(result);
  return result;
};

const deleteProduct = async (product_id) => {
  const result = await Product.deleteOne({ _id: product_id });
  return result;
};

module.exports = {
  getProductById,
  createProduct,
  getProducts,
  deleteProduct,
};
