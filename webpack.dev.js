const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].js',
	},
	devtool: 'eval',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
	},
});