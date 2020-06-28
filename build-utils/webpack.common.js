const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        //need this regex for windows
        // only works on osx or linux: /node_modules\/(?!(lit-element|lit-html)\/).*/,
        exclude: /[\\/]node_modules[\\/](?!(lit-element|lit-html)[\\/]).*/,
        use: 'babel-loader',
      },
      {
        // for image support
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      },
    ]
  },
  resolve: {
    extensions: ['*','.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {from: 'src/assets/images', to: 'assets/images'},
      {
        //Polyfills for E11+ / evergreen browsers
        context: 'node_modules/@webcomponents/webcomponentsjs',
        from: '**/*.js',
        to: 'webcomponents'
      },
      {from: 'src/data', to: 'data'}
    ])
  ],
  output: {                                       // was working with npm run build ??              
    path: path.resolve(__dirname, 'dist'), //formerly  path: path.resolve(__dirname, '../', 'dist')
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    //contentBase: './dist',  // was working before on npm run start, not sure about build
    historyApiFallback: true,
    port: 3000,  
  },
};

path: path.resolve(__dirname, '../', 'dist')