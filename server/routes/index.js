const { Router } = require("express");
const router = Router();

const productRouter = require("./api/products");
const categoryRouter = require("./api/categoryAPI");

const apiRouter = router
  .use("/products", productRouter)
  .use("/category", categoryRouter);

module.exports = {
  apiRouter,
};
