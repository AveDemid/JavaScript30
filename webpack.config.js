const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    common: "./src/common",
    drumKit: "./src/1-drum-kit",
    clock: "./src/2-clock",
    cssVariablesAndJs: "./src/3-css-variables-and-js",
    arrayCardio1: "./src/4-array-cardio-1",
    flexPanelImageGallary: "./src/5-flex-panel-image-gallary",
    ajaxTypeAhead: "./src/6-ajax-type-ahead",
    arrayCardio2: "./src/7-array-cardio-2",
    funWithHtml5Canvas: "./src/8-fun-with-html5-canvas",
    mustKnowDevToolsTricks: "./src/9-14-must-know-dev-tools-tricks",
    holdShiftToCheckMultipleCheckboxes: "./src/10-hold-shift-to-check-multiple-checkboxes",
    customHtml5VideoPlayer: "./src/11-custom-html5-video-player",
    keySequenceDetection: "./src/12-key-sequence-detection",
    slideInOnScroll: "./src/13-slide-in-on-scroll",
    objectAndArraysReferenceVsCopy: "./src/14-object-and-arrays-reference-vs-copy",
    localStorageAndEventDelegation: "./src/15-local-storage-and-event-delegation",
    cssTextShadowMouseMoveEffect: "./src/16-css-text-shadow-mouse-move-effect",
    sortingBandNamesWithoutArticles: "./src/17-sorting-band-names-without-articles",
    tallyStringTimesWithReduce: "./src/18-tally-string-times-with-reduce",
    unrealWebcamFun: "./src/19-unreal-webcam-fun",
    nativeSpeechRecognition: "./src/20-native-speech-recognition",
    geolocationBasedSpeedometerAndCompass: "./src/21-geolocation-based-speedometer-and-compass",
    followAlongLinks: "./src/22-follow-along-links",
    speechSynthesis: "./src/23-speech-synthesis",
    stickyNav: "./src/24-sticky-nav",
    eventCapturePropagationBubblingAndOnce: "./src/25-event-capture-propagation-bubbling-and-once",
    stripeFollowAlongDropdown: "./src/26-stripe-follow-along-dropdown",
    clickAndDragToScroll: "./src/27-click-and-drag-to-scroll",
    videosSpeedControllerUi: "./src/28-video-speed-controller-ui",
    countdownClock: "./src/29-countdown-clock",
    whackAMoleGame: "./src/30-whack-a-mole-game"
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
      template: "./src/1-drum-kit/index.html",
      filename: "drum-kit.html",
      title: "JavaScript Drum Kit",
      chunks: ["drumKit", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/2-clock/index.html",
      filename: "clock.html",
      title: "CSS + JS Clock",
      chunks: ["clock", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/3-css-variables-and-js/index.html",
      filename: "css-variables-and-js.html",
      title: "Playing with CSS Variables and JS",
      chunks: ["cssVariablesAndJs", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/4-array-cardio-1/index.html",
      filename: "array-cardio-1.html",
      title: "Array Cardio Day 1",
      chunks: ["arrayCardio1", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/5-flex-panel-image-gallary/index.html",
      filename: "flex-panel-image-gallary.html",
      title: "Flex Panel Image Gallary",
      chunks: ["flexPanelImageGallary", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/6-ajax-type-ahead/index.html",
      filename: "ajax-type-ahead.html",
      title: "Ajax Type Ahead",
      chunks: ["ajaxTypeAhead", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/7-array-cardio-2/index.html",
      filename: "array-cardio-2.html",
      title: "Array Cardio Day 2",
      chunks: ["arrayCardio2", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/8-fun-with-html5-canvas/index.html",
      filename: "fun-with-html5-canvas.html",
      title: "Fun with HTML5 Canvas",
      chunks: ["funWithHtml5Canvas", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/9-14-must-know-dev-tools-tricks/index.html",
      filename: "14-must-know-dev-tools-tricks.html",
      title: "14 Must Know Dev Tools Tricks",
      chunks: ["mustKnowDevToolsTricks", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/10-hold-shift-to-check-multiple-checkboxes/index.html",
      filename: "hold-shift-to-check-multiple-checkboxes.html",
      title: "Hold Shift to Check Multiple Checkboxes",
      chunks: ["holdShiftToCheckMultipleCheckboxes", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/11-custom-html5-video-player/index.html",
      filename: "custom-html5-video-player.html",
      title: "Custom HTML5 Video Player",
      chunks: ["customHtml5VideoPlayer", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/12-key-sequence-detection/index.html",
      filename: "key-sequence-detection.html",
      title: "Key Sequence Detection",
      chunks: ["keySequenceDetection", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/13-slide-in-on-scroll/index.html",
      filename: "slide-in-on-scroll.html",
      title: "Slide in On Scroll",
      chunks: ["slideInOnScroll", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/14-object-and-arrays-reference-vs-copy/index.html",
      filename: "object-and-arrays-reference-vs-copy.html",
      title: "Object and Arrays - Reference VS Copy",
      chunks: ["objectAndArraysReferenceVsCopy", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/15-local-storage-and-event-delegation/index.html",
      filename: "local-storage-and-event-delegation.html",
      title: "LocalStorage",
      chunks: ["localStorageAndEventDelegation", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/16-css-text-shadow-mouse-move-effect/index.html",
      filename: "css-text-shadow-mouse-move-effect.html",
      title: "Mouse Move Shadow",
      chunks: ["cssTextShadowMouseMoveEffect", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/17-sorting-band-names-without-articles/index.html",
      filename: "sorting-band-names-without-articles.html",
      title: "Sort Without Articles",
      chunks: ["sortingBandNamesWithoutArticles", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/18-tally-string-times-with-reduce/index.html",
      filename: "tally-string-times-with-reduce.html",
      title: "Adding Up Times with Reduce",
      chunks: ["tallyStringTimesWithReduce", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/19-unreal-webcam-fun/index.html",
      filename: "19-unreal-webcam-fun.html",
      title: "Webcam Fun",
      chunks: ["unrealWebcamFun", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/20-native-speech-recognition/index.html",
      filename: "native-speech-recognition.html",
      title: "Speech Detection",
      chunks: ["nativeSpeechRecognition", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/21-geolocation-based-speedometer-and-compass/index.html",
      filename: "geolocation-based-speedometer-and-compass.html",
      title: "Geolocation",
      chunks: ["geolocationBasedSpeedometerAndCompass", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/22-follow-along-links/index.html",
      filename: "follow-along-links.html",
      title: "Follow Along Link Highlighter",
      chunks: ["followAlongLinks", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/23-speech-synthesis/index.html",
      filename: "speech-synthesis.html",
      title: "Speech Synthesis",
      chunks: ["speechSynthesis", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/24-sticky-nav/index.html",
      filename: "sticky-nav.html",
      title: "Sticky Nav",
      chunks: ["stickyNav", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/25-event-capture-propagation-bubbling-and-once/index.html",
      filename: "event-capture-propagation-bubbling-and-once.html",
      title: "",
      chunks: ["eventCapturePropagationBubblingAndOnce", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/26-stripe-follow-along-dropdown/index.html",
      filename: "stripe-follow-along-dropdown.html",
      title: "Event Capture, Propagation, Bubbling and Onc",
      chunks: ["stripeFollowAlongDropdown", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/27-click-and-drag-to-scroll/index.html",
      filename: "click-and-drag-to-scroll.html",
      title: "Stripe Follow Along Nav",
      chunks: ["clickAndDragToScroll", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/28-video-speed-controller-ui/index.html",
      filename: "video-speed-controller-ui.html",
      title: "Click and Drag",
      chunks: ["videosSpeedControllerUi", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/29-countdown-clock/index.html",
      filename: "countdown-clock.html",
      title: "Countdown Timer",
      chunks: ["countdownClock", "common"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/30-whack-a-mole-game/index.html",
      filename: "30-whack-a-mole-game.html",
      title: "Whack A Mole",
      chunks: ["whackAMoleGame", "common"]
    }),
  ]
};
