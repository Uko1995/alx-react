const path = require('path');
const { title } = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { max } = require('lodash');
const { type } = require('os');

module.exports ={
    entry: path.resolve(__dirname, './js/dashboard_main.js'),
    performance: {
        maxAssetSize: 1000000,
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
            {test: /\.css$/i, use: ['style-loader', 'css-loader']},
            {test: /\.(ico|png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
};