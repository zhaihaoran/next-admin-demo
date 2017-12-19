const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const {
	WebpackBundleSizeAnalyzerPlugin
} = require('webpack-bundle-size-analyzer');
const { ANALYZE, NODE_EVN } = process.env;

module.exports = {
	// 是否使用文件系统自带路由
	// useFileSystemPublicRoutes: false,
	// CDN配置
	// assetPrefix: isProd ? 'https://cdn.mydomain.com' : "",
	// distDir: 'build', 打包目录
	webpack: (config, { buildId, dev }) => {
		// webpack 不推荐处理css、less，因为webpack只能处理浏览器端的。最好在babel中处理
		config.module.rules.push(
			{
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader']
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					'babel-loader',
					'raw-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							includePaths: [' ', 'node_modules']
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
				new WebpackBundleSizeAnalyzerPlugin('stats.txt')
			);
		}
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					// Disabled because of an issue with Uglify breaking seemingly valid code:
					// https://github.com/facebookincubator/create-react-app/issues/2376
					// Pending further investigation:
					// https://github.com/mishoo/UglifyJS2/issues/2011
					comparisons: false
				},
				mangle: {
					safari10: true
				},
				output: {
					comments: false,
					ascii_only: true
				}
			})
		);

		return config;
	},
	webpackDevMiddleware: config => {
		// Perform customizations to webpack dev middleware config
		return config;
	},
	// 只在dev模式下生效
	onDemandEntries: {
		// period (in ms) where the server will keep pages in the buffer
		maxInactiveAge: 25 * 1000,
		// number of pages that should be kept simultaneously without being disposed
		pagesBufferLength: 2
	}
};
