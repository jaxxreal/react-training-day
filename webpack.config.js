const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    module: {
        noParse: [
            // all modules to not parse by webpack, before add new one - check,
            // is it work without parse or not
            'axios',
            'babel-polyfill',
            'js-cookie',
            'lodash',
            'react-bootstrap',
            'react-icons'
        ],
        preLoaders: [
            {
                loader: 'eslint',
                include: [APP_APTH],
                exclude: [path.resolve(__dirname, 'node_modules')],
                test: /\.jsx?$/
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                include: APP_APTH,
                loader: 'babel',
                query: require('./babel.dev')
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
    plugins: IS_PRODUCTION ? [
        new ExtractTextPlugin('styles.css')
    ] : [
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
        })
    ]
};
