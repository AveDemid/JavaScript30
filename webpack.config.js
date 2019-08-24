const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    common: "./src/common",
    drumKit: "./src/drum-kit",
    clock: "./src/clock",
    cssVariablesAndJs: "./src/css-variables-and-js",
    arrayCardio1: "./src/array-cardio-1",
    flexPanelImageGallary: "./src/flex-panel-image-gallary",
    ajaxTypeAhead: "./src/ajax-type-ahead",
    arrayCardio2: "./src/array-cardio-2",
    funWithHtml5Canvas: "./src/fun-with-html5-canvas",
    mustKnowDevToolsTricks: "./src/14-must-know-dev-tools-tricks",
    holdShiftToCheckMultipleCheckboxes: "./src/hold-shift-to-check-multiple-checkboxes",
    customHtml5VideoPlayer: "./src/custom-html5-video-player",
    keySequenceDetection: "./src/key-sequence-detection"
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
      },
      {
        test: /\.mp4$/,
        loader: "file-loader",
        options: {
          outputPath: "video",
          name: "[name].[ext]"
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
    new HtmlWebpackPlugin({
      template: "./src/fun-with-html5-canvas/index.html",
      filename: "fun-with-html5-canvas.html",
      title: "Fun with HTML5 Canvas",
      chunks: ["funWithHtml5Canvas", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/14-must-know-dev-tools-tricks/index.html",
      filename: "14-must-know-dev-tools-tricks.html",
      title: "14 Must Know Dev Tools Tricks",
      chunks: ["mustKnowDevToolsTricks", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/hold-shift-to-check-multiple-checkboxes/index.html",
      filename: "hold-shift-to-check-multiple-checkboxes.html",
      title: "Hold Shift to Check Multiple Checkboxes",
      chunks: ["holdShiftToCheckMultipleCheckboxes", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/custom-html5-video-player/index.html",
      filename: "custom-html5-video-player.html",
      title: "Custom HTML5 Video Player",
      chunks: ["customHtml5VideoPlayer", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/key-sequence-detection/index.html",
      filename: "key-sequence-detection.html",
      title: "Key Sequence Detection",
      chunks: ["keySequenceDetection", "common"]
    }),
  ]
};
