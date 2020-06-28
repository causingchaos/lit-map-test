const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] 
        //extract each js file that has css, into it's own 'mini' css file
      }
    ]
  },
  devtool: 'source-map',  // mapping js files out of bundle.js
  /*
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    })
  ]
  */
 plugins: [
  new Dotenv({
    path: './.env.production'
  }),
  new MiniCssExtractPlugin(),
 ]
};