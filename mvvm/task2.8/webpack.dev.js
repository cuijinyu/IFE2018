const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    mode: NODE_ENV,
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, './node_modules')],
                use: 'babel-loader',
            },
            {
                // 图片加载器
                test:/\.(png|jpg|gif|jpeg)$/,
                use:'url-loader?limit=2048'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: {
        alias: {
            san:
                NODE_ENV === 'production'
                    ? 'san/dist/san.js'
                    : 'san/dist/san.dev.js',
        },
    },
    devtool:"eval-source-map",
    devServer: {
        contentBase:"./dist",
        historyApiFallback:true,
        inline:true
    },
};