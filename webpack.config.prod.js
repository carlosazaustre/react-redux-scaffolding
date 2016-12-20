const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCssPlugin = require('purifycss-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devTool: 'source-map',
  noInfo: false,
  target: 'web',

  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loaders: ['file'] },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') }),
    new ExtractTextPlugin('styles.css'),
    new PurifyCssPlugin(path.join(__dirname, 'src'), '/index.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true,
    contentBase: './dist'
  }
};
