const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  //less computational version of source map (bundle.js diffusion) for dev server
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv({
      path: './.env.development'
    })
  ]
  //plugins: [
  //  new DefinePlugin({
  //    'process.env': {
  //      'NODE_ENV': JSON.stringify('development')  
  //    }
  //  })
  //]
};