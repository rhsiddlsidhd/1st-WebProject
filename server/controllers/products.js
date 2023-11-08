const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const productsService = require('../services/products');
const imageService = require('../services/image');
const catchAsync = require('../utils/catchAsync');

exports.getProduct = catchAsync(async (req, res, next) => {
  const product_id = req.params.id;

  const product = await productsService.getProductById(product_id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, '상품을 찾지 못하였습니다.');
  }
  logger.info(`[pid=${product_id}] : ${product}`);
  res.status(httpStatus.OK).json(product);
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const category_id = req.query.category_id;
  const page = req.query.page;
  const products = await productsService.getProducts(page || 1);
  res.status(httpStatus.OK).json(products);
});

exports.createProduct = catchAsync(async (req, res, next) => {
  logger.info('상품생성');
  const product = await productsService.createProduct(req.body);
  logger.info(product);
  res.status(httpStatus.OK).json(product);
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product_id = req.params.id;
  const product = await productsService.getProductById(product_id);

  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, '상품을 찾지 못하였습니다.');
  }
  const result = await productsService.deleteProduct(product_id);
  res.status(httpStatus.OK).json(result);
});

exports.addImagesToProduct = catchAsync(async (req, res, next) => {
  logger.info('상품 이미지 추가');
  const product_id = req.params.id;
  console.log(product_id);
  const product = await productsService.getProductById(product_id);

  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, '상품을 찾지 못하였습니다.');
  }

  const images = await imageService.addImages(req.files);
  const result = await productsService.addMainImagesToProduct(product, images);
  logger.info(result);
  res.status(httpStatus.OK).json(result);
});

exports.deleteImagesInProduct = catchAsync(async (req, res, next) => {
  logger.info('상품 이미지 삭제');
  const product_id = req.params.id;
  console.log(product_id);
  const product = await productsService.getProductById(product_id);

  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, '상품을 찾지 못하였습니다.');
  }

  const images = req.body.images;

  const result = await productsService.deleteMainImagesToProduct(
    product,
    images
  );
  logger.info(result);
  res.status(httpStatus.OK).json(result);
});

exports.deleteAllImagesInProduct = catchAsync(async (req, res, next) => {
  logger.info('상품 이미지 전체 삭제');
  const product_id = req.params.id;
  console.log(product_id);
  const product = await productsService.getProductById(product_id);

  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, '상품을 찾지 못하였습니다.');
  }

  const result = await productsService.deleteAllMainImagesToProduct(product);
  logger.info(result);
  res.status(httpStatus.OK).json(result);
});
