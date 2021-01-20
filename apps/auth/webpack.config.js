var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = (env) => {
  const mode = env.WEBPACK_SERVE ? "development" : "production";
  return {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      publicPath: "http://localhost:3002/",
    },
    devtool: mode === "development" ? "inline-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
      ],
    },
    mode: "development",
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new WebpackManifestPlugin(),
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: "./",
      host: "0.0.0.0",
      port: 3002,
      hot: true,
      compress: true,
      open: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, Content-Type, Authorization",
      },
    },
  };
};
