const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'build'),
        // publicPath: './src'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.svg', '.png'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './src'),
        ]
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
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
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
        new ForkTsCheckerWebpackPlugin(),
    ],

};
