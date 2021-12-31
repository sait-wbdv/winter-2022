export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'winter-2022',
    htmlAttrs: {
      lang: 'en'
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
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://vite.nuxtjs.org/
    'nuxt-vite',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://image.nuxtjs.org/
    '@nuxt/image'
  ],
  googleFonts: {
    families: {
      'Open+Sans': true,
      Raleway: {
        wght: [100, 300]
      }
    },
    preconnect: true,
    preload: true,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
  ],
  content: {
    remarkPlugins: [
      'remark-definition-list'
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
