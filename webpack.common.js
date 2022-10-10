const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	target: 'web',
	entry: {
		main: path.resolve(__dirname, 'src', 'index.tsx'),
	},
	output: {
		clean: true,
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				loader: 'ts-loader',
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src', 'template.html'),
		title: 'Package Search',
	})],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}