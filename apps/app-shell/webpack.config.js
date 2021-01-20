var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const mode = env.WEBPACK_SERVE ? "development" : "production";
  return {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
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
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: "./",
      host: "0.0.0.0",
      port: 3000,
      hot: true,
      compress: true,
      open: true,
    },
  };
};
