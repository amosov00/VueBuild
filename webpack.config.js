const path = require('path')
const HTMLplugin = require('html-webpack-plugin')
const obj = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analitycs: './src/analitycs.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    plugins: [
        new HTMLplugin({
            template: "./src/index.html"
        }),
        new obj.CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            '@models': path.resolve(__dirname, 'src/models')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ttf)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    devServer: {
        port: 1234
    }
}
