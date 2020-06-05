"use strict";

var path = require('path');
var ngToolsWebpack = require('@ngtools/webpack');

module.exports = {
    entry: './Frontend/app.main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/app')
    },
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'raw-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
            },
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader'
            }
        ]
    },
    devtool: 'sourcemap',
    plugins: [
        new ngToolsWebpack.AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: 'Frontend/App/app.module#AppModule'
        })
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    node: {
        fs: "empty"
    }
};

