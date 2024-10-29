const path = require('path');
const { title } = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: path.resolve(__dirname, './js/dashboard_main.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'production',
};