const { Router } = require("express");
const validate = require("../../middlewares/vaildate");
const productsValidation = require("../../validation/products");
const productsController = require("../../controllers/products");

const multer = require("multer");
const upload = multer();

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
  )
  .post("/:id/images", upload.any(), productsController.addImagesToProduct)
  .delete("/:id/images", productsController.deleteImagesInProduct)
  .delete("/:id/images/all", productsController.deleteAllImagesInProduct);
module.exports = router;
