const webpackMerge = require('webpack-merge');
//const webpack = require('webpack');
const commonConfig = require('./webpack.common.js')
const path = require('path');

//addon code for build: analyze 
const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs)
  ? addonsArgs
  : [addonsArgs];

  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
}
// end of addon code

module.exports = ({ env, addon }) => {
  //console.log(`./webpack.${env}.js`)

  const envConfig = require(`./webpack.${env}.js`);

  //return webpackMerge(commonConfig, envConfig); //old code
  return webpackMerge(commonConfig,envConfig, ...getAddons(addon));
};