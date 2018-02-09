const path = require('path')

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    entry: './examples/main',
    resolve: {
      alias: {
        'bravo': path.resolve(__dirname, "src/index.js"),
        '@': path.resolve(__dirname, "src"),
        '@a': path.resolve(__dirname, "src/assets"),
        '@c': path.resolve(__dirname, "src/components"),
        '@u': path.resolve(__dirname, "src/utils")
      }
    }
  },
  devServer: {
    port: 3000
  }
}