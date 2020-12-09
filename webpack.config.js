const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode:'production',
	context: path.resolve(__dirname, "./src"),
	entry: {
		main: ["@babel/polyfill/noConflict", "./js/index.js"],
		initAnimation: ["@babel/polyfill/noConflict", "./js/initAnimation-dist.js"],
		vidbgConfig: ["@babel/polyfill/noConflict", "./js/vidbg-config.js"],
		scroll: ["@babel/polyfill/noConflict", "./js/scroll.js"],
		burger: ["@babel/polyfill/noConflict", "./js/burger.js"],
		popups: ["@babel/polyfill/noConflict", "./js/popup.js"],
		resize: ["@babel/polyfill/noConflict", "./js/resize.js"],
		toggleItems: ["@babel/polyfill/noConflict", "./js/toggleImg.js"],
		faq: ["@babel/polyfill/noConflict", "./js/faq.js"],
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			
			{
				test: /\.(gif|jpg|png|jpeg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/img/",
							useRelativePath: true,
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.scss$/,
				
				loaders: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {importLoaders: 1},
					},
					
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"autoprefixer",
										{
											// Options
										},
									],
								],
							},
						},
					},
					{
						loader: "resolve-url-loader", //resolve-url-loader needs to come *BEFORE* sass-loader
						options: {
							sourceMap: true,
						},
					}, // add this before sass-loader
					"sass-loader?sourceMap",
				],
			},
			{
				test: /\.(mp4|webm)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/video/",
							useRelativePath: true,
							esModule: false,
						},
					},
				],
			},
			
			// {
			//   test: /\.css$/,
			// (use: [
			// MiniCssExtractPlugin.loader,
			// {
			//   loader: "css-loader",
			//   options: { importLoaders: 1 },
			// },
			// {
			//   loader: "postcss-loader",
			//   options: {
			//     postcssOptions: {
			//       plugins: [
			//         [
			//           "autoprefixer",
			//           {
			//             // Options
			//           }
			//         ]
			//       ],
			//     },
			//   },
			// }
			// ]),
			// },
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/",
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 4200,
	},
	optimization: {
		minimize: true,
		minimizer: [
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
			// `...`
			new CssMinimizerPlugin(),
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			filename: "index.html",
			template: "./index.html",
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "styles.css",
		}),
		new CopyPlugin({
			patterns: [
				{from: "./video", to: "./video"},
				{from: "./js/vidbg.js", to: "js/vidbg.js"},
				{from: "./js/jquery-3.5.1.min.js", to: "./js/jquery-3.5.1.min.js"}
			],
		}),
	],
};