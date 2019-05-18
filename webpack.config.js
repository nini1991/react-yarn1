const path = require("path");
const autoprefixer = require("autoprefixer");
const htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: path.join(__dirname, "./src/index.js"), //path relative to this file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js" //path relative to this file
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader"
          }
          /* {
            loader: "post-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                autoprefixer({
                  browsers: [" >1%", " last 2 versions"]
                })
              ]
            }
          }*/
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlwebpackplugin({
      template: path.join(__dirname, "/src/index.html"),
      filename: "index.html",
      inject: "body"
    })
  ]
};
