var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    uiList: ['./resources/js/ui.list.js'],
    uiCommon: ['./resources/js/ui.common.js'],
    uiSensor: ['./resources/js/ui.sensor.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './resources/js/dist'),
    publicPath: './resources/js/dist'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ["env", {
              "targets": {
                "browsers": ["last 2 versions"]
              }
            }]
          ]
        }
      }
    }]
  }
};
