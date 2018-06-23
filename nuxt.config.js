const pkg = require('./package')
// const hljs=require('highlight.js')
//var md=require('@nuxtjs/markdownit')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'github-markdown-css/github-markdown.css',
    // 'highlight.js/styles/solarized-dark.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // '@nuxtjs/markdownit',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    host: '127.0.0.1',
    port: '1171',
    credentials: false,
  },

  // markdownit: {
  //   injected: true,
  //   // highlight: function (str, lang) {
  //   //   console.log(str)
  //   //   if (lang && hljs.getLanguage(lang)) {
  //   //     try {
  //   //       return '<pre class="hljs"><code>' +
  //   //              hljs.highlight(lang, str, true).value +
  //   //              '</code></pre>';
  //   //     } catch (__) {}
  //   //   }

  //   //   //return '<pre class="hljs"><code>' + markdownit.utils.escapeHtml(str) + '</code></pre>';
  //   // }
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // babel: {
    //   presets: ['es2015', 'stage-0']
    // }
  }
}