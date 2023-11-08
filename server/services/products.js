const { Product, Image } = require('../models');
const catchAsync = require('../utils/catchAsync');

const getProductById = async (product_id) => {
  const product = await Product.findOne({ _id: product_id });

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
  console.log('create Product!');
  const product = new Product({
    ...body,
  });
  console.log('create Product!');
  const result = await product.save();
  console.log(result);
  return result;
};

const deleteProduct = async (product_id) => {
  const result = await Product.deleteOne({ _id: product_id });
  return result;
};

const addMainImagesToProduct = async (product, images) => {
  product.main_images = [...product.main_images, ...images];
  const result = await product.save();
  return result;
};
const addDetailImagesToProduct = async (product, images) => {
  product.main_images = images;
  const result = await product.save();
  return result;
};

const deleteMainImagesToProduct = async (product, images) => {
  let result = [];
  product.main_images = product.main_images.filter((item) => {
    return !images.includes(item.image_id);
  });
  await product.save();

  for (let img of images) {
    let iresult = await Image.deleteOne({ image_id: img });
    result.push(iresult);
  }

  return result;
};
const deleteDetailImagesToProduct = async (product, images) => {
  let result = [];
  product.detail_images = product.detail_images.filter((item) => {
    return !images.includes(item.image_id);
  });
  await product.save();

  for (let img of images) {
    let iresult = await Image.deleteOne({ image_id: img });
    result.push(iresult);
  }

  return result;
};

const deleteAllMainImagesToProduct = async (product) => {
  for (let img of product.main_images) {
    let iresult = await Image.deleteOne({ image_id: img.image_id });
  }

  product.main_images = [];
  const result = await product.save();

  return result;
};
const deleteAllDetailImagesToProduct = async (product) => {
  for (let img of product.detail_images) {
    let iresult = await Image.deleteOne({ image_id: img.image_id });
    result.push(iresult);
  }

  product.detail_images = [];
  const result = await product.save();

  return result;
};

module.exports = {
  getProductById,
  createProduct,
  getProducts,
  deleteProduct,
  addMainImagesToProduct,
  addDetailImagesToProduct,
  deleteMainImagesToProduct,
  deleteDetailImagesToProduct,
  deleteAllMainImagesToProduct,
  deleteAllDetailImagesToProduct,
};
