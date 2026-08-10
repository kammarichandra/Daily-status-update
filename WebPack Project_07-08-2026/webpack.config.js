import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {

    // Development mode
    mode: "development",

    // Entry point
    entry: "./src/index.js",

    // Output bundle
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    // Generate source maps
    devtool: "source-map",

    // Loaders
    module: {
        rules: [

            // Babel Loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }

        ]
    },

    // Plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack + Babel Project"
        })
    ]

};