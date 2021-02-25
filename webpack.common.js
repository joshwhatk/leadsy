// eslint-disable-next-line no-restricted-modules
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const assetPath = '/';
const distPath = `${assetPath}/dist`;
const srcPath = `${assetPath}/src`;

const baseConfiguration = {
  context: path.join(__dirname, srcPath),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, distPath, '/js')
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, distPath)]),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /(sass)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, '/node_modules')]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        include: /(js)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../img/'
            }
          }
        ]
      }
    ]
  }
};

module.exports = baseConfiguration;
