/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDirectory = "docs";

const config = {
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg|JPG)$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    port: 3001,
    // open: true,
    historyApiFallback: true,
    // hot: true,
    // https: true,
    stats: 'minimal',
    proxy: {
      "/api": "http://localhost:3000",
      "/session": "http://localhost:3000"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      favicon: "./src/public/favicon.ico",
      meta: {
        description: "Table Example",
        robots: "index, follow",
      }
    }),
  ]
};

module.exports = (env, argv) => {
  config.entry = "./src/index.js"
  return config
}
