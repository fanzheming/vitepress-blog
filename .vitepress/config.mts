import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-siderbar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-blog/",
  title: "EricFan的文档站",
  description: "EricFan的文档站",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/cat.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/cat.svg",
    siteTitle: '主页',
    outlineTitle: '目录',
    outline: 'deep',
    docFooter: {
      prev: false,
      next: false
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    aside: "left",
    nav: [
      {
        text: '前端', items: set_sidebar("front-end"),activeMatch: '/front-end/'
      }
    ],
    sidebar: {
      '/front-end/': [{
        text: '前端',
        collapsed: false,
        items: set_sidebar("front-end")
      }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fanzheming' }
    ],
    footer: {
      copyright: "Copyright © 2025-present <a href'https://github.com/fanzheming'>EricFan<a>"
    },
  }
})
