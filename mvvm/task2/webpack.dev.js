module.exports = {
    entry: __dirname + '/src/index.js',
    mode:"development",
    devtool:"eval-source-map",
    devServer: {
        contentBase:"./dist",
        historyApiFallback:true,
        inline:true
    },
    output: {
        path:__dirname + '/dist',
        filename: "bundle.js"
    },
    loader: {
        rules:[
            {
                test: /\.san$/,
                loader: 'san-loader'
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
    }
}