"use strict";

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: './Frontend/app.main.ts'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/app')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'wwwroot'),
        port: 9000,
        hot: true,
        noInfo: true,
        overlay: true,
        proxy: {
            '/api': 'http://localhost:62276/'
        },
        historyApiFallback: {
            rewrites: [
              { from: /^\/$/, to: '/index.html' },
            ]
        },
        publicPath: '/app/',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            {
                enforce: 'pre',
                test: /\.ts?$/,
                use: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'raw-loader'
                    }, {
                        loader: 'sass-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer('last 2 versions', 'ie 10')];
                            }
                        }
                    }]
            },
            {
                test: /\.(css|html)$/,
                loader: 'raw-loader'
            },
            {
                test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
                parser: { system: true },  // enable SystemJS
            },
        ]
    },
    devtool: 'sourcemap',
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'Frontend'), // path to your src
            {}
        )
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    node: {
        fs: "empty"
    }
}

