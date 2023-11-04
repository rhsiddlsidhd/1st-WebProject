const Joi = require("joi");

// express-joi-validation 한번 생각해봐

const getProduct = {
  params: Joi.object()
    .keys({
      id: Joi.string().required(),
    })
    .unknown(false),
};
const getProducts = {
  query: Joi.object()
    .keys({
      id: Joi.string(),
    })
    .unknown(false),
};
const deleteProduct = {
  params: Joi.object()
    .keys({
      id: Joi.string(),
    })
    .unknown(false),
};

const postProduct = {};

const patchProduct = {};

module.exports = {
  getProduct,
  getProducts,
  deleteProduct,
  postProduct,
  patchProduct,
};
