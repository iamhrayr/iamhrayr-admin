const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
// const FlowBabelWebpackPlugin = require("flow-babel-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.gql$/,
        use: "graphql-tag/loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  plugins: [
    // new FlowBabelWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new InterpolateHtmlPlugin({
      NODE_ENV: "development"
    })
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Graphql: path.resolve(__dirname, "./src/graphql"),
      Views: path.resolve(__dirname, "./src/views")
    },
    extensions: [".mjs", ".js", ".jsx", ".json", ".gql"]
  }
};
