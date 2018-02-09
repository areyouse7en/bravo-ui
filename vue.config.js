module.exports = {
  lintOnSave: true,
  configureWebpack: {
    entry: './examples/main'
  },
  devServer: {
    port: 3000
  }
}