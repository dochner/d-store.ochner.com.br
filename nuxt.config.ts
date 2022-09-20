import { nuxtConfigBuild } from './config/nuxt/build';
import { nuxtConfigTailwind } from './config/nuxt/tailwind';
import { nuxtConfigHead } from './config/nuxt/head';
import { nuxtConfigContent } from './config/nuxt/content';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ...nuxtConfigBuild,
  components: true,
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: nuxtConfigHead,
  },
  loading: {
    color: '#02bb4d',
  },
  tailwindcss: nuxtConfigTailwind,
  content: nuxtConfigContent,
});
