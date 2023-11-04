const { Router } = require("express");
const router = Router();

const productsRouter = require("./api/products");
const categoryRouter = require("./api/categoryAPI");

const apiRouter = router
  .use("/products", productsRouter)
  .use("/category", categoryRouter);

module.exports = {
  apiRouter,
};
