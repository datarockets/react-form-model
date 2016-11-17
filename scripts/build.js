const path = require('path');

module.exports = {
  bail: true,

  entry: path.resolve(process.cwd(), 'index.js'),

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ['babel-preset-react-app'],
        }
      }
    ]
  }
};
