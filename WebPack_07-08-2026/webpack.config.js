import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {

    mode: "development",


    entry: "./src/index.js",


    output: {

        filename: "bundle.js",

        path: path.resolve(__dirname, "dist"),

        clean: true

    },


    devtool: "source-map",


    module: {

        rules: [

            // CSS Loader
            {
                test: /\.css$/i,

                use: [
                    "style-loader",
                    "css-loader"
                ]
            },


            // Babel Loader
            {
                test: /\.js$/,

                exclude: /node_modules/,

                use: {

                    loader: "babel-loader"

                }
            },


            // Image Loader (Webpack 5 Asset Module)
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: "asset/resource"
            }

        ]

    },


    plugins: [

        new HtmlWebpackPlugin({

            title: "Webpack + Babel Practice"

        })

    ],


    devServer: {

        static: "./dist",

        port: 3000,

        open: true

    }

};