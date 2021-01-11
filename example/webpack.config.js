const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './assets/index.ts'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './assets/'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
