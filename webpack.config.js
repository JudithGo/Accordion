module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    },
    devServer: {
      port: 3000,
      disableHostCheck: true,
      contentBase: './public',
    }
}