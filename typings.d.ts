// 1、引用了样式文件等，可能遇到报错Cannot find module …。
// 解决方式： import哪种文件类型报错，就在根目录的typings.d.ts文件中添加哪种文件类型。
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'dumi';
