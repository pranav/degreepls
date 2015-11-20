var path = require('path');
var webpack = require('webpack');
require('es6-promise').polyfill()

module.exports = {
    entry: './src/app/app.jsx',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/,
            }
        ]
    }
};