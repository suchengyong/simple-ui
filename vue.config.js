const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/page-simple-ui/': '/',
  css: {
    loaderOptions: {
      sass: {  //webpack 配置 scss 根目录
        includePaths: [path.join(__dirname, 'style')]
      },
    }
  },
}