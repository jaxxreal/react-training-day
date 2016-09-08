const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_APTH = path.resolve(__dirname, 'src/app');
const IS_PRODUCTION = process.env.ENV === 'production';
const STYLES = 'css?sourceMap!autoprefixer?browsers=last 5 version!less';

module.exports = {
    devtool: IS_PRODUCTION ? 'source-map' : 'eval',
    entry: path.resolve(__dirname, './src/app/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        noParse: [
            // all modules to not parse by webpack, before add new one - check,
            // is it work without parse or not
            // 'js-cookie',
            // 'lodash',
        ],
        preLoaders: [
            {
                loader: 'eslint',
                include: [APP_APTH],
                exclude: /(node_modules|bower_components|dist)/,
                test: /\.jsx?$/
            }
        ],
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                include: APP_APTH,
                exclude: /(node_modules|bower_components|dist)/,
                query: {
                    cacheDirectory: true,
                    presets: ['latest', 'react'],
                    plugins: [
                        'transform-es2015-destructuring',
                        'transform-object-rest-spread'
                    ],
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: IS_PRODUCTION
                    ? ExtractTextPlugin.extract('style?sourceMap', STYLES)
                    : 'style!css!autoprefixer?browsers=last 3 version!less'
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file?name=images/[name].[hash].[ext]',
                include: path.resolve(__dirname, 'src/assets/images')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PRODUCTION': JSON.stringify(IS_PRODUCTION),
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new SvgStore({
            // svgo options
            svgoOptions: {
                plugins: [
                    { removeTitle: true }
                ]
            }
        }),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    ].concat(IS_PRODUCTION ? [
        new ExtractTextPlugin('styles.css')
    ] : [])
};
