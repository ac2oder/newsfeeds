const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
      rules: [
          {
              test: /\.js?$/,
              loader: 'babel-loader',
              exclude: /(node_modules)/
          }
      ]
  },
  //plugins: [
  //  new webpack.DefinePlugin({
  //      apiKeyProvidedByWebpack: JSON.stringify('394c77fa5f184750944eca00008c1199'),
  //      urlProvidedByWebpack: JSON.stringify('https://newsapi.org/v2/')
  //  })
  //],
  devServer: {
      contentBase: path.resolve('dist')
  }
};