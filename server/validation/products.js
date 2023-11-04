const Joi = require("joi");

const getProduct = {
  params: Joi.object()
    .keys({
      id: Joi.string().min(1).required(),
    })
    .unknown(false),
};

const getProducts = {
  query: Joi.object()
    .keys({
      category_id: Joi.string().min(1),
    })
    .unknown(false),
};

const deleteProduct = {
  params: Joi.object()
    .keys({
      id: Joi.string().min(1).required(),
    })
    .unknown(false),
};

module.exports = {
  getProduct,
  getProducts,
  deleteProduct,
};
