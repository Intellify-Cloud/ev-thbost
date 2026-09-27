const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    performance: {
        hints: false
    },
    optimization: {
        minimizer: [new TerserJSPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css'
        }),
    ],
    entry: './_assets/bundle.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets'),
        hashDigestLength: 32
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[contenthash:32][ext]'
                }
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[contenthash:32][ext]'
                }
            },
            {
                test: /\.(svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource',
                generator: {
                    filename: '[contenthash:32][ext]'
                }
            }
        ]
    }
};
