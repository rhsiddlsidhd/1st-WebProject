const { Router } = require("express");
const logger = require("../../config/logger");
const validate = require("../../middlewares/vaildate");
const productsValidation = require("../../validation/products");
const router = Router();
router
  .get("/", validate(productsValidation.getProducts), (req, res) => {
    res.json({ type: "products" });
    logger.info(req.query.cat);
  })
  .get("/:id", validate(productsValidation.getProduct), (req, res) => {
    res.json({ type: "a product" });
  });
module.exports = router;
