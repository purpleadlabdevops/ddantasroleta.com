export default {
  ssr: false,
  head: {
    title: 'Diego Mc – My Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Brazil LP'
      },
      {
        name: 'author',
        content: 'Max Globa',
      },
      {
        name: 'author-link',
        content: 'https://t.me/maxgloba_dev',
      },
      {
        name: "facebook-domain-verification",
        content: "g218t2tbbv2ntxzm5ir2zjhtqbcjzd",
      },
      {
        "http-equiv": "delegate-ch",
        content: "sec-ch-ua https://track.ddantasroleta.com; sec-ch-ua-mobile https://track.ddantasroleta.com; sec-ch-ua-arch https://track.ddantasroleta.com; sec-ch-ua-model https://track.ddantasroleta.com; sec-ch-ua-platform https://track.ddantasroleta.com; sec-ch-ua-platform-version https://track.ddantasroleta.com; sec-ch-ua-bitness https://track.ddantasroleta.com; sec-ch-ua-full-version-list https://track.ddantasroleta.com; sec-ch-ua-full-version https://track.ddantasroleta.com",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap", rel: "stylesheet" },
    ],
    script: [
      { src: '/js/roleta.js' }
    ],
  },
  styleResources: {
    scss: ['~/styles/_functions.scss']
  },
  plugins: [],
  components: true,
  modules: ['@nuxtjs/style-resources'],
  router: {
    base: '/',
    mode: 'history'
  },
  generate: {
    dir: './dist'
  },
  build: {
    target: 'static'
  }
}
