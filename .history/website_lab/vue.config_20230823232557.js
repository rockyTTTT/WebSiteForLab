const { defineConfig } = require('@vue/cli-service')
// const { config } = require('vue/types/umd')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 7070
  },
  chainWebpack: config =>{
    config.plugin('html')
    .tap(args => {
      args[0].title = "Zhanglab";
      return args;
    })
  }
})
