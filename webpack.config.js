const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/bnkService.js',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, './.webpack'),
    filename: 'src/bnkService.js',
  },
  target: 'node',
  externals: [
    nodeExternals(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
    ],
  },
};
