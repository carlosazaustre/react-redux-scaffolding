const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devTool: 'cheap-module-eval-source-map',
  noInfo: false,
  target: 'web',

  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css?sourceMap'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loaders: ['file'] },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true,
    contentBase: './src'
  }
};
