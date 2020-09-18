module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/sass/main.scss";'
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
