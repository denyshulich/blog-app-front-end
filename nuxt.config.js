export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'blog-app-front-end',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],

        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['normalize.css/normalize.css', '~/assets/scss/main.scss'],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/load-script.js', ssr: false },
        { src: '~/plugins/vue-lazysizes.client.js', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    // components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint

        '@nuxtjs/stylelint-module'
    ],

    // TODO: add modules ['@nuxtjs/dotenv', '@nuxtjs/style-resources', '@nuxtjs/svg-sprite', '@nuxtjs/device']
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        // '@nuxtjs/pwa',
        // https://www.npmjs.com/package/@nuxtjs/dotenv
        '@nuxtjs/dotenv',
        // https://www.npmjs.com/package/@nuxtjs/style-resources
        '@nuxtjs/style-resources',
        // https://github.com/nuxt-community/svg-sprite-module
        '@nuxtjs/svg-sprite',
        // https://github.com/nuxt-community/device-module
        '@nuxtjs/device',

        'bootstrap-vue/nuxt'
    ],

    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        componentPlugins: ['Collapse', 'Form', 'FormInput'],
        directivePlugins: ['VBToggle']
    },

    dotenv: {
        /* module options */
    },
    styleResources: {
        scss: ['~assets/scss/*.scss']
    },
    svgSprite: {
        input: '~/assets/svg/'
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    // pwa: {
    //   manifest: {
    //     lang: 'en',
    //   },
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    /*
     ** Router config
     */
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: '/',

                component: resolve(__dirname, 'pages/-index.vue')
            });
        }
    }
};
