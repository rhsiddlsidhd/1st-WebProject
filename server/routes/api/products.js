const { Router } = require("express");
const validate = require("../../middlewares/vaildate");
const productsValidation = require("../../validation/products");
const productsController = require("../../controllers/products");

const router = Router();
router
  .get(
    "/:id",
    validate(productsValidation.getProduct),
    productsController.getProduct
  )
  .get(
    "/",
    validate(productsValidation.getProducts),
    productsController.getProducts
  )
  .delete(
    "/:id",
    validate(productsValidation.deleteProduct),
    productsController.deleteProduct
  )
  .post(
    "/",
    validate(productsValidation.createProduct),
    productsController.createProduct
  );
module.exports = router;
