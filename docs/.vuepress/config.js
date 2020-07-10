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
        { text: 'pc端组件', link: '/pc/' },
        { text: '移动端组件', link: '/mobile/' },
        { text: 'Github', link: 'https://github.com/suchengyong/simple-ui/' },
      ],
      sidebarDepth: 2,  
      smoothScroll: true,
      collapsable:false,
      sidebar: {
          '/pc/':[
            '',
            ['components/basic/','基础组件'],
            ['components/form/','表单组件'],
            ['components/navigation/','导航组件'],
            ['components/notice/','消息组件'],
            ['components/other/','其他组件']
          ],
          '/mobile/':[
            '',
            ['components/basic/','基础组件'],
            ['components/form/','表单组件'],
            ['components/feedback/','反馈组件']
          ]
      }
    },
    scss:{ //配置 scss 根目录
      includePaths: [path.join(__dirname, '../../style')]
    }
  }