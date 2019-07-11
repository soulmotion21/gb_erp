const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
       plugins: ['react-hot-loader/babel', [
         "@babel/plugin-proposal-class-properties", {
           "loose": true
         }
       ]]
      }
    }, {
     test:  /\.css$/,
      use: [{
       loader: 'style-loader'
      }, {
       loader: 'css-loader',
        options:{
          sourceMap: true,
          modules: {
            localIdentName: '[local]'
          }
        }
      }]
    }, {
      test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      options: {
        name: '[hash].[ext]',
        limit: 10000,
      }
    }]
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'app.css' })],
  output: {
    filename: "app.js",
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    historyApiFallback: true,
  }
};