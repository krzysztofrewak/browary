const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolveSrc (_path) {
  return path.join(__dirname, _path)
}

module.exports = {
  devServer: {
    public: '0.0.0.0:' + process.env.DEVELOPMENT_NODE_PORT,
    port: process.env.DEVELOPMENT_NODE_PORT
  },
  outputDir: path.resolve(__dirname, './public'),
  configureWebpack: {
    entry: {
      app: './frontend/main.js'
    },
    resolve: {
      alias: {
        '@': resolveSrc('frontend'),
        src: resolveSrc('frontend'),
        assets: resolveSrc('frontend/assets')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './frontend/templates/index.html'
      })
    ]
  },
  css: {
    sourceMap: !(process.env.NODE_ENV === 'production')
  }
}
