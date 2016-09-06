const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// console.log(process.env.ENV);

const IS_PRODUCTION = process.env.ENV === 'production';
const STYLES = 'css?sourceMap!autoprefixer?browsers=last 5 version!less';

module.exports = {
    devtool: 'eval',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
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
                include: path.resolve(__dirname, 'src/images')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: IS_PRODUCTION ? [
        new ExtractTextPlugin("styles.css")
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