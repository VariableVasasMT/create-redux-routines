const path = require('path');
const resolve = path.resolve;
const { Dir } = require('./config/env.config');
module.exports = {
  mode: 'development',
  entry: resolve( Dir.ROOT, 'index' ),
  output: {
    filename: 'bundle.js',
    path: resolve(Dir.ROOT, 'dist')
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        resolve(Dir.ROOT, 'src')
      ],
      exclude: [
        resolve(Dir.ROOT, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        plugins: ['transform-class-properties']
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};