module.exports = {
  title: '404分享',
  description: '404分享,只为更好的导航',
  //description 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 头部导航
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '分享',
        link: '/share/'
      },
      {
        text: '导航',
        link: '/nav/'
      },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [{
            text: 'Chinese',
            link: '/language/chinese/'
          },
          {
            text: 'Japanese',
            link: '/language/japanese/'
          }
        ]
      }
    ],
    sidebar: 'auto',
    // 更新时间显示
    lastUpdated: '最后更新时间', // string | boolean
  }
}