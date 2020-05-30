const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/components/index.less',
    output: {
        filename: 'main.css',
        path: path.resolve(__dirname, 'lib/components')
    },
    resolve: {
      extensions: [".less", '.css']
    },
    module: {
      rules: [
        // { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
        // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
            test: /\.less$/,
            loader: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "less-loader"],
        },
        {
            test: /\.css$/,
            exclude: /index.js/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '/lib'
                },
            },  "css-loader"]
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[hash:8].[ext]"
        },
        { test: /\.json$/, loaders: ['json-loader'] },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: 'images',
                        name: "[name].[ext]"
                    }
                },
                {
                    loader: 'img-loader',
                }
            ]
        },
      ]
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
    },
    devtool: "source-map",
    plugins: [
        new CopyWebpackPlugin([
            { context: 'src/components', from: '**/*.less', to: './' }
        ]),
        new MiniCssExtractPlugin({
            filename: "index.css",
        })
    ],
    mode: 'production',
    node: {
        fs: false,
        Buffer: true
    },
}
