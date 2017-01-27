const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
    new CleanWebpackPlugin(['dist'], {
            verbose: true,
            dry: false,
        })
  ]
}
