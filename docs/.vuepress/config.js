module.exports = {
  title: 'Vary的博客',
  description: '一个博客, 大概会记录一些技术笔记',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "有文章更新了",
        buttonText: "刷新"
      }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/register-components': {
      componentsDir: '/components/'
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-**********-*'
    }
  },
  themeConfig: {
    repo: 'https://github.com/ch1ies/vary_blogs',
    repoLabel: '查看源码',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我改善此页面！',
    lastUpdated: '上次更新',
    nav: [{
      text: '主页',
      link: '/',
      },
      {
        text: '博文',
        items: [
          { text: 'Java', link: '/java/' },
          { text: 'Go', link: '/Go/' },
          { text: 'Kotlin', link: '/kotlin/' },
          { text: 'Css', link: '/css/' },
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/ch1ies/vary_blogs' },
    ],
    sidebar: {
      '/java/': [
        '',
        'grammars',
        'object-oriented',
        'API-introduction',
        'API-lang',
        'API-util',
        'API-io',
    ],
      '/kotlin/': [
          '',
      ]
    },
    sidebarDepth: 2
  }
}