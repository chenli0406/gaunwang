const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: './',
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
  ]
});