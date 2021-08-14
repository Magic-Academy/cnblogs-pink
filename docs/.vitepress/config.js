/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-08-13 15:27:42
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-08-13 18:18:11
 * @FilePath: \cnblogs-pink\docs\.vitepress\config.js
 */
module.exports = {
    title: 'cnblogs-pink',
    description: '一个粉色的博客园主题',
    lang: 'en-US',
    head: [
        [
            "meta",
            { name: "keywords", content: "cnblogs-pink 博客园粉色主题" },
        ],
        // ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
        [
            "meta",
            {
                name: "description",
                content:
                    "cnblogs-pink 博客园极简粉色主题",
            },
        ],
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/cnblogs-pink/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '首页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/songdaochuanshu/cnblogs-pink' },
        ],
        sidebar: {
            // 侧边栏
            "/": [
                {
                    text: "使用介绍",
                    children: [
                        { text: "介绍", link: "/guide/" },
                        { text: "开始使用", link: "/guide/start" },
                        { text: "联系我", link: "/guide/contact" },
                    ],
                },
            ],
        },
        sidebarDepth: 2, // 侧边栏显示2级
    }
};