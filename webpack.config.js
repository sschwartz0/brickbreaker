const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const htmlWebpackTemplateConfig = require('./config/htmlWebpackTemplate.js'); // TODO: get working

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: require('html-webpack-template'),
    
      // Optional
      meta: [
        {
          name: 'description',
          content: 'A better default template for html-webpack-plugin.'
        }
      ],
      mobile: true,
      lang: 'en-US',
      inlineManifestWebpackName: 'webpackManifest',
      title: 'My App',
 
    
      // And any other config options from html-webpack-plugin:
      // https://github.com/ampedandwired/html-webpack-plugin#configuration
    })
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
};