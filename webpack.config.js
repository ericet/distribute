const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,  "docs")
    },
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            chunks: ["main"]
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public/assets/'),
                    to: path.resolve(__dirname, 'docs')
                }
            ]
        }),
    ]
};
