const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 8088,
    contentBase: path.join(__dirname, '/'),
    watchContentBase: true,
    proxy:{
      '/api':{
        target: 'http://148.70.37.198:8808',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
});