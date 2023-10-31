const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

console.log(
  "--->",
  path.resolve(__dirname, "src", "front", "src", "js", "index.js")
);

module.exports = {
  mode: "development",
  // watch: true,
  devServer: {
    watchFiles: [
      path.resolve(__dirname, "src", "front", "src", "html", "*.html"),
    ],
    static: {
      directory: path.resolve(__dirname, "src", "front", "dist"),
    },
  },
  entry: {
    index: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "src", "front", "src", "js", "index.js"),
    ],
    products: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "src", "front", "src", "js", "products.js"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "src", "front", "dist"),
    filename: "[name].js",
    clean: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "src",
        "front",
        "src",
        "html",
        "index.html"
      ),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "src",
        "front",
        "src",
        "html",
        "products.html"
      ),
      filename: "products.html",
      chunks: ["products"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      // 이미지 파일 로더
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
          },
        },
      },
    ],
  },
};
