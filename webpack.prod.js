const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.common');

module.exports = merge.smart(baseConfig, {
  entry: {
    Leadsy: './index.js'
  },
  output: {
    library: 'Leadsy',
    libraryTarget: 'umd'
  },
  mode: 'production',
  plugins: [
    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        zindex: false
      }
    })
  ]
});
