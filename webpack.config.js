const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  //entry: [
  //  path.normalize('es6-shim/es6-shim.min'),
  //  'reflect-metadata',
  //  path.normalize('zone.js/dist/zone-microtask'),
  //  path.resolve('app/app')
  //],
  entry: {
    vendors: [
      path.normalize('es6-shim/es6-shim.min'),
      'reflect-metadata',
      path.normalize('zone.js/dist/zone-microtask')
    ],
    app: path.resolve('app/app')
  },
  output: {
    path: path.resolve('www/build/js'),
    //filename: 'app.bundle.js',
    filename: '[name].bundle.js',
    //chunkFilename: '[name].bundle.[chunkhash].js',
    pathinfo: false, // show module paths in the bundle, handy for debugging
    publicPath: 'build/js/'
  },
  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.ts$/,
        //loader: 'ts',
        loader: 'awesome-typescript',
        query: {
          doTypeCheck: true,
          resolveGlobs: false,
          externals: ['typings/tsd.d.ts']
        },
        include: path.resolve('app'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: path.resolve('node_modules/angular2'),
        loader: 'strip-sourcemap'
      }
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ]
  },
  resolve: {
    root: ['app'],
    alias: {
      'angular2': path.resolve('node_modules/angular2')
    },
    extensions: ["", ".js", ".ts"]
  },

  plugins: [
    //new webpack.NoErrorsPlugin()
    new CleanPlugin('www/build'),
    new HtmlPlugin({
      title: 'Ionic App',
      chunks: ['app', 'vendors'],
      filename: '../../index.html',
      inject: true,
      template: path.join(__dirname, 'www', 'index.jade')
    })
  ],

  devtool: 'source-map'
};
