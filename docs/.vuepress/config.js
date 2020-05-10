const path = require('path')
module.exports = {
    base:'/',
    title: 'Simple UI',
    description: '一个极简风格UI组件库',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
      logo:'/logo.png',
      nav: [
        { text: '首页', link: '/' },
        { text: 'Github', link: 'https://github.com/suchengyong/simple-ui/' },
      ],
      smoothScroll: true,
      sidebar: [
          {
              title: '指南',
              collapsable: true,
              children: [
                'views/guide/install.md',
                'views/guide/get-started.md'
              ]
            },
            {
              title: '设计',
              collapsable: true,
              children: [
                'views/design/color/',
              ]
            },
            {
              title: '组件',
              collapsable: true,
              children: [
                'views/components/basic/',
                'views/components/form/',
                'views/components/navigation/',
                'views/components/notice/',
                'views/components/other/'
              ]
            },
      ]
    },
    scss:{ //配置 scss 根目录
      includePaths: [path.join(__dirname, '../../style')]
    }
  }