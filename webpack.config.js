const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: "./public/index.html",
			filename: "./index.html",
		}),
        new MiniCSSExtractPlugin(), 
	],
    module: {
        rules: [
            {
                test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
            },
            { 
                test: /\.css$/, 
                use: [ 
                    MiniCSSExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                ]
            },
            { 
                test: /\.scss$/, 
                use: [ 
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: "file-loader",
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: "public/assets/[name].[ext]",
                        },
                    },
                ]
            },
        ]
    }
}
