var path = require('path');
var webpack = require('webpack');
 
//var BUILD_DIR = path.resolve(__dirname, '/public');
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

var configuracion =  {
  entry: './src/index.js',
  output: { 
      path: './public/js', 
      filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};

module.exports = configuracion;