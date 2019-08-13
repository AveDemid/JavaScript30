const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    drumKit: "./src/drum-kit/index.js",
    clock: "./src/clock/index.js",
    cssVariablesAndJs: "./src/css-variables-and-js/index.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "JavaScript30 - 30 Day Challenge",
      chunks: []
    }),
    new HtmlWebpackPlugin({
      template: "./src/drum-kit/index.html",
      filename: "drum-kit.html",
      title: "JavaScript Drum Kit",
      chunks: ["drumKit"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/clock/index.html",
      filename: "clock.html",
      title: "CSS + JS Clock",
      chunks: ["clock"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/css-variables-and-js/index.html",
      filename: "css-variables-and-js.html",
      title: "Playing with CSS Variables and JS",
      chunks: ["cssVariablesAndJs"]
    })
  ]
}