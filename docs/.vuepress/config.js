module.exports = {
  title: 'nb blog',
  dest: './dist',
  base: '/nb-blog',
  description: '让我们一起摇摆',
  themeConfig: {
    repo: 'libchaos/nb_blog',
    // 添加导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: '知乎', link: '/zhihu/' },
      {
        text: '项目',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'readbook', link: 'https://github.com/libchaos/readbook' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
  }
}