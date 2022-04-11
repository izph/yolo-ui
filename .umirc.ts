import { defineConfig } from 'dumi';

// 按需引入babel-plugin-import

// dumi配置文件
export default defineConfig({
  title: 'Yolo UI',
  favicon: '/images/yoloui-logo.png',
  logo: '/images/yoloui-logo.png',
  outputPath: 'docs-dist',
  // base: '/yolo-ui',
  mode: 'site',
  // more config: https://d.umijs.org/config
  devServer: {
    port: 8888,
  },
  theme: {
    // 修改 dumi 默认主题的主色，更多变量详见：https://github.com/umijs/dumi/blob/master/packages/theme-default/src/style/variables.less
    '@c-primary': '#4080ff',
  },
  // exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // resolve: {
  //   includes: ['docs', 'components'],
  // },
  // navs: [
  //   null,
  //   {
  //     title: 'Github',
  //     path: 'https://github.com/izph/yolo-ui',
  //   },
  // ],
  // styles: [`./src/style/index.less`, `./src/style/base.less`, `./src/style/color.less`],
  // extraBabelPlugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'yolo-ui',
  //       camel2DashComponentName: false,
  //       customStyleName: (name) => {
  //         return `./style/index.less`; // 注意：这里 ./ 不可省略
  //       },
  //     },
  //     'yolo-ui',
  //   ],
  // ],
});
