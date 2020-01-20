const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    devtool : 'inline-source-map',
    devServer : {
        contentBase : './dist'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules|bower_components)/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : [ 'env', 'stage-2' ]
                    }
                }
            },
            {
                test : /\.scss$/,
                use: ExtractTextPlugin.extract({
                                                   use : [ {
                                                       loader : "css-loader"
                                                   }, {
                                                       loader : "sass-loader"
                                                   } ],
                                                   // use style-loader in development
                                                   fallback : "style-loader"
                                               })
            }
        ]
    },
    plugins : [
        new ExtractTextPlugin("styles.css")
    ]
};