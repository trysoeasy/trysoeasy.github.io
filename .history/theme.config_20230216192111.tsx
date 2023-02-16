// theme.config.tsx
import type { DocsThemeConfig} from 'nextra-theme-docs';
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  project: {
    // 右上角 Github icon 点击跳转信息
    link: 'https://github.com/trysoeasy'
  },
  // 文档仓库链接
  docsRepositoryBase: 'https://github.com/trysoeasy/trysoeasy.github.io',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        // 设置浏览器标题
        titleTemplate: '%s – 前端博客和笔记'
      }
    }
  },
  // 发现文档错误时，可点击直接去 GitHub 编辑内容
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  // 问题反馈配置，可以自动跳转到 github issue
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  // 页面底部版权信息
  footer: {
    text: `MIT 2023 © Hutao.`
  }
}

export default config