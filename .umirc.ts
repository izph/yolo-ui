import { defineConfig } from 'dumi';

// dumi配置文件
export default defineConfig({
  title: 'Yolo UI',
  favicon: 'https://img.icons8.com/nolan/80/yolo.png',
  logo: 'https://img.icons8.com/nolan/80/yolo.png',
  // publicPath: './',
  outputPath: 'docs-dist',
  base: './',
  mode: 'site',
  devServer: {
    port: 8888,
  },
  theme: {
    // 修改 dumi 默认主题的主色，更多变量详见：https://github.com/umijs/dumi/blob/master/packages/theme-default/src/style/variables.less
    '@c-primary': '#4080ff',
  },
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/izph/yolo-ui',
    },
  ],
});
