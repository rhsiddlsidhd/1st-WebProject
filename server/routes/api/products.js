const { Router } = require("express");
const validate = require("../../middlewares/vaildate");
const productsValidation = require("../../validation/products");

const router = Router();
router
  .get("/:id", validate(productsValidation.getProduct), (req, res) => {
    res.json({ type: "get a product" });
  })
  .get("/", validate(productsValidation.getProducts), (req, res) => {
    res.json({ type: "get products" });
  })
  .delete("/:id", validate(productsValidation.deleteProduct), (req, res) => {
    res.json({ type: "delete a product" });
  });
module.exports = router;
