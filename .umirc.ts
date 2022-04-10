import { defineConfig } from 'dumi';

// 按需引入babel-plugin-import

// dumi配置文件
export default defineConfig({
  title: 'Yolo UI',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // base: '/yolo-ui',
  mode: 'site',
  // more config: https://d.umijs.org/config
  devServer: {
    port: 8888,
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
