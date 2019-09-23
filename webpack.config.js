const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    module:{ 
    rules: [
        {test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader'},
        {test: /\.(css)$/, use: ['style-loader', 'css-loader']}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV === 'production'? 'production': 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ]
}