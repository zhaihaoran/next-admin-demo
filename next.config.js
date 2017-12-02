const path = require("path");
const glob = require("glob");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;

module.exports = {
    webpack: config => {
        config.devtool = "cheap-module-eval-source-map";
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: "emit-file-loader",
                options: {
                    name: "dist/[path][name].[ext]"
                }
            },
            {
                test: /\.css$/,
                use: ["babel-loader", "raw-loader", "postcss-loader"]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    "babel-loader",
                    "raw-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [" ", "node_modules"]
                                .map(d => path.join(__dirname, d))
                                .map(g => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        );
        if (ANALYZE) {
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: "server",
                    analyzerPort: 8888,
                    openAnalyzer: true
                })
            );
        }

        return config;
    }
};
