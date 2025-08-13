const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production';

	return {
		entry: './src/index.js', // Your main JS file
		mode: "production",
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
			clean: true, // cleans old files
		},
		externals: {
			jquery: "jQuery"
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
					],
				},
				{
					test: /\.js$/i,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader', // optional if using ES6+
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			}),
		],
		optimization: {
			minimize: isProduction,
			minimizer: [
				new TerserPlugin(), // minify JS
				new CssMinimizerPlugin(), // minify CSS
			],
		},
		devtool: isProduction ? false : 'source-map',
		devServer: {
			static: './dist',
			hot: true,
			open: true,
		},
	};
};
