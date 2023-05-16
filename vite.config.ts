import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig, type PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import Components from 'unplugin-vue-components/vite';
import postcssConfig from './config/postcss.config';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    visualizer() as PluginOption,
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
      deep: true,
      resolvers: [
        //收集@ionic/vue的组件
        (componentName) => {
          if (componentName.startsWith('Ion'))
            return { name: componentName, from: '@ionic/vue' };
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: postcssConfig,
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
});
