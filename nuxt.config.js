export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  vue: {
    config: {
      productionTip: false,
      devtools: false
    }
  }
,  

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Henri-dev',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file
    '@/assets/css/beufy.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue2-filters',
    '~plugins/vue-filter-date-format',
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    [
      '@nuxtjs/i18n',
      { /* module options */ }
    ],
    '@nuxtjs/axios'


  ],



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },

  // server
  server:{
     host:  "0.0.0.0"
  },

  axios: {},
  
}
  
