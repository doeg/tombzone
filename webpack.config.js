const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'tombzone.js'),
  output: {
    path: __dirname,
    filename: 'tombzone-bundle.js'
  }
};