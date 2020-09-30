const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[chunkhash].js'
    },
    devServer: {
        port: 4000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: "services.html"
        }),
        new CleanWebpackPlugin()
    ]
};