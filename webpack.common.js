const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GlobEntry = require('webpack-glob-entry');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let plugins = [
  // new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: '[id].css',
  }),
  new CopyPlugin([
    { from: path.join(__dirname, 'src/lib'), to: path.join(__dirname, 'dist/lib'), toType: 'dir' },
    { from: path.join(__dirname, 'src/videos'), to: path.join(__dirname, 'dist/videos'), toType: 'dir' },
    { from: path.join(__dirname, 'src/favicon.ico'), to: path.join(__dirname, 'dist'), toType: 'dir' }
  ]),
];

function createHtmlPlugin(pages) {
  for (let key in pages) {
    let template = pages[key];
    let filename = template.replace('./src/view/', '');
    let baseUrl = './';
    let level = filename.match('/');
    if (level) {
      level = level.length;
      baseUrl = '../';
      for (let i = 1; i < level; i++) {
        baseUrl += '../';
      }
    }
    let config = {
      filename,
      template,
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      },
      files: {
        css: [baseUrl + 'lib/iconfont/iconfont.css', baseUrl + 'css/base.min.css', baseUrl + 'lib/animate.min.css'],
        js: [baseUrl + 'lib/layout.js', baseUrl + 'lib/jquery-1.8.3.min.js'],
      }
    };
    plugins.push(new HtmlWebpackPlugin(config));
  }
}

let pages = GlobEntry('./src/view/*.html');
createHtmlPlugin(pages);
pages = GlobEntry('./src/view/*/*.html');
createHtmlPlugin(pages);

let entry = GlobEntry('./src/js/*.js');
let scss = GlobEntry('./src/style/*.scss');
for (let key in scss) {
  entry[key + '.min'] = scss[key];
}

module.exports = {
  entry,
  output: {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|src\/lib/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 512,
            esModule: false,
            outputPath: "images"
          }
        }]
      }
    ]
  }
}