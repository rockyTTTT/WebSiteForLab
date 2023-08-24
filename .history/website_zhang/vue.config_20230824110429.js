const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(_dirname,'./src/assets/styles/variables.less'),
        path.join(_dirname,'./src/assets/styles/mixins.less')
      ]
    }
  }
})
