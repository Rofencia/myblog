const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js', // 入口文件
      title: '学习空间'
    }
  },
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:8081', 
      }
    }
  }
})