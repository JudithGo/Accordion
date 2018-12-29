const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const api =  require('./src/api.json')

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    port: 3000,
    disableHostCheck: true,
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
        
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),  
    new MiniCssExtractPlugin({
      filename: "styles.css",                                   
      chunkFilename: "[id].css"
    }),
    new GenerateJsonPlugin('api.json', api )
  ],
}