// @ts-ignore
import vsharp from 'vite-plugin-vsharp'
import viteCompression from 'vite-plugin-compression'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3005,
  },
  vite: {
    plugins: [
      // 图片压缩
      vsharp(),
      // 代码gzip压缩
      viteCompression({
        verbose: true, // 控制台输出压缩结果
        disable: true, // 禁用
        threshold: 10240, // 文件大小大于这个值时启用压缩
        algorithm: 'gzip', // 压缩算法
        ext: '.gz', // 压缩后缀
        deleteOriginFile: false, // 是否删除原文件
        compressionOptions: {
          // 压缩级别
          level: 5,
        },
      }),
    ],
  },

  app: {
    head: {
      // 解决403 Forbbiden问题
      meta: [{ name: 'referrer', content: 'no-referrer' }],
    },
  },

  modules: ['@nuxtjs/eslint-module'],

  build: {
    transpile: ['three'],
  },
})
