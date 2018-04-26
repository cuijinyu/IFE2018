const WebpackParalleUglifyPlugin = require("webpack-parallel-uglify-plugin");
module.exports = {
    entry: __dirname + '/src/index.js',
    mode:"production",
    devtool:"inline-source-map",
    output: {
        path:__dirname + '/dist',
        filename: "bundle.js"
    },
    loader: {
        rules:[
            {
                test: /\.san$/,
                loader: 'san-loader',
            },
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"bable-loader",
                    options:{
                        preset:["env","react"]
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new WebpackParalleUglifyPlugin({
            uglifyJS: {
                mangle: false,
                output: {
                    beautify: false,
                    comments: false
                },
                compress: {
                    warnings: false,
                    drop_console: true,
                    collapse_vars: true,
                    reduce_vars: true
                }
            }
        })
    ]
}