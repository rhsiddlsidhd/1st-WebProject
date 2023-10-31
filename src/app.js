const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("../webpack.config.js");
const compiler = webpack(webpackConfig);

const express = require("express");
const app = express();

// app.use(
//   webpackDevMiddleware(compiler, {
//     // publicPath: webpackConfig.output.publicPath,
//     stats: { colors: true },
//   })
// );
// app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + "/front/dist"));

app.set("views", __dirname);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/products", (req, res) => {
  res.render("./front/dist/products.html");
  //   res.sendFile(__dirname + "/front/dist/products.html");
});
app.get("/", (req, res) => {
  res.render("./front/dist/index.html");
  //   res.sendFile(__dirname + "/front/dist/index.html");
});

app.listen(8080, () => {
  //   console.log(`서버 구동중 http://localhost:${port}`);
});
