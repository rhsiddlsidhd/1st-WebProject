const { Router } = require("express");
const logger = require("../config/logger");
const router = Router();

const productsRouter = require("./api/products");
const categoryRouter = require("./api/categoryAPI");
const brandRouter = require("./api/brand");

logger.info("API 라우터 올라옴");

const apiRouter = router
  .use("/products", productsRouter)
  .use("/category", categoryRouter)
  .use("/brand", brandRouter);

module.exports = {
  apiRouter,
};