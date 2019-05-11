const PATH = require('../path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => ({
    devtool: 'cheap-module-source-map',
    watchOptions: {
        poll: false,
        ignored: /node_modules/
    },
    entry: {
        boot: PATH.src('app/app.tsx')
    },
    output: {
        path: PATH.dist(),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // disable type checker - we will use it in fork plugin
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATH.src('index.ejs'),
            favicon: PATH.src('assets/favicon.ico'),
        })
    ]
});