const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
    distFolder: path.resolve(__dirname, 'dist_dev'),
    assetsFolder: path.resolve(__dirname, 'assets'),
}

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/index.tsx'],
        react: ['react', 'react-dom']
    },
    output: {
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: paths.distFolder,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'cheap-module-source-map',
    // Target environment
    target: 'web',

    resolve: {
        // Resolve module requests (default)
        modules: ['node_modules'],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    devServer: {
        contentBase: paths.assetsFolder,
        index: 'index.html',
        hot: true,
        historyApiFallback: true,
    },

    module: {
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
            {
                oneOf: [
                    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                    {
                        test: /\.tsx?$/,
                        loader: 'awesome-typescript-loader'
                    },
                     // we want to append the svg tag directly to HTML for highlighting items
                     {
                        test: [/\.svg$/],
                        loader: require.resolve('raw-loader'),
                        include: [
                            path.resolve(__dirname, 'public/assets/svg'),
                        ],
                    },
                    // "url" loader works like "file" loader except that it embeds assets
                    // smaller than specified limit in bytes as data URLs to avoid requests.
                    // A missing `test` is equivalent to a match.
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/url/[name].[hash:8].[ext]',
                        },
                    },
                    // SASS
                    {
                        test: /\.s[ac]ss$/,
                        use: [
                            "style-loader", // creates style nodes from JS strings
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
                            {
                                loader: "sass-loader",
                                options: {
                                    implementation: require("node-sass")
                                }
                            } // compiles Sass to CSS, using Node Sass by default
                        ]
                    },
                    {
                        // test: /.(ttf|otf|svg|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        use: [{
                            loader: 'file-loader',
                            options: {
                                name: 'static/file/[name].[hash:8].[ext]',
                                outputPath: 'assets/',
                                publicPath: 'assets/'
                            }
                        }]
                    },
                ]
            }
            
             // LESS
            // {
            //     test: /\.less$/,
            //     use: [
            //         require.resolve('style-loader'),
            //         {
            //             loader: require.resolve('css-loader'),
            //             options: {
            //                 importLoaders: 3
            //             },
            //         },
            //         {
            //             loader: require.resolve('postcss-loader'),
            //             options: {
            //                 // Necessary for external CSS imports to work
            //                 // https://github.com/facebookincubator/create-react-app/issues/2677
            //                 ident: 'postcss',
            //                 plugins: () => [
            //                     require('postcss-flexbugs-fixes'),
            //                     autoprefixer({
            //                         browsers: [
            //                             '>1%',
            //                             'last 4 versions',
            //                             'Firefox ESR',
            //                             'not ie < 9', // React doesn't support IE8 anyway
            //                         ],
            //                         flexbox: 'no-2009',
            //                     }),
            //                 ],
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
        new webpack.DefinePlugin({
            'hasPresence': false,
        }),
        new CleanWebpackPlugin([paths.distFolder]),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'public/assets/profileImages/*.jpg',
                to: './',
                transform (content, path) {
                    return content;
                },
                cache: true
            }
          ], {}),
    ],
};
