const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    hot:true,
    port: 8081
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})