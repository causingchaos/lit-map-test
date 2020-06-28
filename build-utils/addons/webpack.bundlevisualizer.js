const Visualizer = require('webpack-visualizer-plugin');

// dist/stats.html
module.exports = {
  plugins: [
    new Visualizer()
  ]
};