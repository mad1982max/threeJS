const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "src", "index.js"),
        index2: path.resolve(__dirname, "src", "index2.js")
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js" 
    },
    optimization: {
      splitChunks: { chunks: "all" }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
        chunks: ['index'],
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index2.html"),
        chunks: ['index2'],
        filename: 'index2.html'
      }),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
};