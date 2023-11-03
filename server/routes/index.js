const { Router } = require('express');
const router = Router();

const productRouter = require('./api/product');
const categoryRouter = require('./api/categoryAPI');

const apiRouter = router
  .use('/product', productRouter)
  .use('/category', categoryRouter);

module.exports = {
  apiRouter,
};
