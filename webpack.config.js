const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    module:{ 
    rules: [
        {test: /\.(js)$/, use: 'babel-loader'},
        {test: /\.(css)$/, use: ['style-loader', 'css-loader']}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ]
}