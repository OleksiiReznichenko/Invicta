export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Invicta',
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
      { rel: 'icon', type: 'image/x-icon', href: '/projects/Invicta/favicon.png' },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap', as: 'style' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Rowdies:wght@300;700&display=swap', as: 'style' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rowdies:wght@300;700&display=swap' },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"
      },
      {
        src: "/projects/Invicta/librariesScript.js"
        // src: "/librariesScript.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/core-components.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    'nuxt-uid-module',
  ],

  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['cookie-universal-nuxt', {ssr: true, target: 'server'}],
    'nuxt-uid-module',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    },
    transpile: ["three"]
  },

  router: {
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: '*',
    //     // component: resolve(__dirname, 'projects/sikuria/pages/index.vue')
    //     component: resolve(__dirname, '~/pages/index.vue')
    //   })
    // },
    middleware: ['isPageExist', 'checkLogin'],
    base: '/projects/Invicta/',
    linkActiveClass: 'active-link'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
