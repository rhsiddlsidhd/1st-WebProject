const { Router } = require("express");
const validate = require("../../middlewares/vaildate");
const productsValidation = require("../../validation/products");

const router = Router();
router
  .get("/:id", validate(productsValidation.getProduct), (req, res) => {
    res.json({ type: "a product" });
  })
  .get("/", validate(productsValidation.getProducts), (req, res) => {
    res.json({ type: "a product" });
  })
  .delete("/:id", validate(productsValidation.deleteProduct), (req, res) => {
    res.json({ type: "a product" });
  });
module.exports = router;
