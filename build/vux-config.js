'use strict'

module.exports = {
  options: {},
  plugins: [
    {
      name: 'vux-ui',//配置 vue-loader
    },
    {
      name:'inline-manifest'
    },
    {
      name: 'duplicate-style',
      options: {
        cssProcessorOptions : {
          safe: true,
          zindex: false,
          autoprefixer: {
            add: true,
            "browsers": [
              "iOS >= 7",
              "Android >= 4.1"
            ]
          }
        }
      }
    },
  ]
}
