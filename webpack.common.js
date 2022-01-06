const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                        ],
                    }
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: true,
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],

};
