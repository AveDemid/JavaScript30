const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    common: "./src/common/index.js",
    drumKit: "./src/drum-kit/index.js",
    clock: "./src/clock/index.js",
    cssVariablesAndJs: "./src/css-variables-and-js/index.js",
    arrayCardio1: "./src/array-cardio-1/index.js",
    flexPanelImageGallary: "./src/flex-panel-image-gallary/index.js",
    ajaxTypeAhead: "./src/ajax-type-ahead/index.js",
    arrayCardio2: "./src/array-cardio-2/index.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.wav$/,
        loader: "file-loader",
        options: {
          outputPath: "sound"
        }
      },
      {
        test: /\.(png|svg|jpg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "images"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "JavaScript30 - 30 Day Challenge",
      chunks: ["common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/drum-kit/index.html",
      filename: "drum-kit.html",
      title: "JavaScript Drum Kit",
      chunks: ["drumKit", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/clock/index.html",
      filename: "clock.html",
      title: "CSS + JS Clock",
      chunks: ["clock", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/css-variables-and-js/index.html",
      filename: "css-variables-and-js.html",
      title: "Playing with CSS Variables and JS",
      chunks: ["cssVariablesAndJs", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/array-cardio-1/index.html",
      filename: "array-cardio-1.html",
      title: "Array Cardio Day 1",
      chunks: ["arrayCardio1", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/flex-panel-image-gallary/index.html",
      filename: "flex-panel-image-gallary.html",
      title: "Flex Panel Image Gallary",
      chunks: ["flexPanelImageGallary", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/ajax-type-ahead/index.html",
      filename: "ajax-type-ahead.html",
      title: "Ajax Type Ahead",
      chunks: ["ajaxTypeAhead", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/array-cardio-2/index.html",
      filename: "array-cardio-2.html",
      title: "Array Cardio Day 2",
      chunks: ["arrayCardio2", "common"]
    }),
  ]
};
