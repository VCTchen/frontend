'use strict'

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:8081/uploadFile',  //目标接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': '/api'   //重写接口
        }
      },
      cssSourceMap: false
    },


    host: 'localhost',
    port: 9988, // 本地端口号
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false,


    useEslint: true,

    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */


    devtool: '#cheap-source-map',


    cacheBusting: true,

    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',

    // you can set by youself according to actual condition
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',


    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],


    bundleAnalyzerReport: process.env.npm_config_report
  }
}
