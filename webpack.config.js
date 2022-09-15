const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const rules = require('./webpack.config.rules.js')()
const webpack = require('webpack')


module.exports = {
    //точка входа
    entry: {
        main: path.resolve(__dirname, './src/index.js'),       // точка взода приложения
    },
    //точка выхода
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    mode: 'development',
    devServer: {
        port: 9000,
        hot: true,
        static: {
            directory: path.join(__dirname, './dist'),
        },
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chat',
            template: path.resolve(__dirname, './src/template.html'), //шаблон
            filename: 'index.html', //название выходного файла
        }),

        new CleanWebpackPlugin(),
        
        new webpack.HotModuleReplacementPlugin(),
    ],
    
    module: {
        rules
    },
}