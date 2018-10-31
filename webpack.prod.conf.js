const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack');

const paths = {
    distFolder: path.resolve(__dirname, 'dist')
}

module.exports = env => {
    env = env || {};
    console.log("env", (env.analyze ? 'Yes analyze' : 'No analyze'));
    return {
        mode: 'production',
        bail: true,
        entry: path.join(__dirname, 'src', 'index.tsx'),
        output: {
            publicPath: '/',
            filename: 'js/[name].[contenthash:8].js',
            chunkFilename: 'js/[name].[contenthash:8].chunk.js',
            path: paths.distFolder,
        },
        // Target environment
        target: 'web',

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ['.ts', '.tsx', '.js', '.json']
        },

        optimization: {
            splitChunks: {
                chunks: 'all',
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: false
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },

        module: {
            strictExportPresence: true,
            rules: [
                {
                    test: /\.tsx?$/,
                    enforce: 'pre',
                    use: [
                        {
                            options: {
                            formatter: 'stylish',
                            },
                            loader: require.resolve('tslint-loader'),
                        }
                    ]
                },
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader'
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader'
                },
                // "url" loader works like "file" loader except that it embeds assets
                // smaller than specified limit in bytes as data URLs to avoid requests.
                // A missing `test` is equivalent to a match.
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
                // SASS
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 3
                            },
                        }, // translates CSS into CommonJS
                        {
                            loader: require.resolve('postcss-loader'),
                            options: {
                                // Necessary for external CSS imports to work
                                // https://github.com/facebookincubator/create-react-app/issues/2677
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-flexbugs-fixes'),
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9', // React doesn't support IE8 anyway
                                        ],
                                        flexbox: 'no-2009',
                                    }),
                                ],
                            },
                        },
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },
                {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    exclude: [/\.js$/, /\.html$/, /\.json$/, /images/],
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'static/[name].[hash:8].[ext]',
                            outputPath: 'assets/',
                            publicPath: 'assets/'
                        }
                    }]
                },
                // {
                //     test: /\.less$/,
                //     use: [
                //         MiniCssExtractPlugin.loader,
                //         {
                //             loader: require.resolve('css-loader'),
                //             options: {
                //                 importLoaders: 3
                //             },
                //         },
                //         {
                //             loader: require.resolve('postcss-loader'),
                //             options: {
                //             ident: 'postcss',
                //             plugins: () => [
                //                 require('postcss-flexbugs-fixes'),
                //                 autoprefixer({
                //                     browsers: [
                //                         '>1%',
                //                         'last 4 versions',
                //                         'Firefox ESR',
                //                         'not ie < 9', // React doesn't support IE8 anyway
                //                     ],
                //                     flexbox: 'no-2009',
                //                 }),
                //             ],
                //             },
                //         },
                //         {
                //             loader: require.resolve('less-loader'),
                //         },
                //     ]
                // }
            ]
        },

        plugins: [
            new CleanWebpackPlugin([paths.distFolder]),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css'
            }),
            (env.analyze ? new BundleAnalyzerPlugin() : () => {}),
        ],
    }
};
