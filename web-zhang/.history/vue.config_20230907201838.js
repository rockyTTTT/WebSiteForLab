const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
     css: {
           loaderOptions: {
               postcss: {
                   plugins: [
                       require('postcss-pxtorem')({
                           rootValue: 37.5,
                           propList: ['*']
                       })
                   ]
               }
           }
       },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname,'./src/assets/styles/variables.less'),
        path.join(__dirname,'./src/assets/styles/mixins.less')
      ]
    }
  }
})
