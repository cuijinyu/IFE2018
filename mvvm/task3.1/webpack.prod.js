const WebpackParalleUglifyPlugin = require("webpack-parallel-uglify-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    mode:"production",
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
            },
            {
                test:/\.san$/,
                use:'san-loader'
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
    plugins: [
        // new WebpackParalleUglifyPlugin({
        //     uglifyJS: {
        //         mangle: false,
        //         output: {
        //             beautify: false,
        //             comments: false
        //         },
        //         compress: {
        //             warnings: false,
        //             drop_console: true,
        //             collapse_vars: true,
        //             reduce_vars: true
        //         }
        //     }
        // })
    ]
}