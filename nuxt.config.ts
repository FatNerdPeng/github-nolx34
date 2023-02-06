// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['element-plus/dist/index.css'],
  imports: {
    dirs: ['./stores'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore', // 自动引入 `usePinia()`
        ],
      },
    ],
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  typescript: {
    shim: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/base.scss" as *;',
        },
      },
    },
  },
});
