const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js']
  },
  entry:{
    app: './src/index'

  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
       presets: [
         ['@babel/preset-env', {
           targets: {
             browsers: ['last 2 chrome versions']
           },
           debug: true
         }],
         '@babel/preset-react'
       ],
       plugins: ['react-hot-loader/babel']
      }
    }]
  },
  plugins: [],
  output: {
    filename: "app.js",
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  }
};