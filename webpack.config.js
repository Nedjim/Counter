const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {test: /\.(s?css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(jpg|png|svg)$/, loader: 'file-loader'}
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
    ]
}