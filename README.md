<p align="center">
  <a href="http://47.93.96.90">
    <img src="https://img.icons8.com/nolan/80/yolo.png"/>
  </a>
</p>

<h1 align="center">Yolo UI</h1>

<div align="center">

Yolo UI，是一款基于 Dumi，由 React + TypeScript + Less 开发的UI组件库。

</div>

一直以来，我都只是停留在会使用各种 `优秀`的开源组件库或者其他依赖库，从来没有想过这些组件库是如何开发的。直到现在，自己参考了[ant-design](https://ant.design/index-cn)、[arco-design](https://arco.design/)等多个组件库，并参考了网上的学习资源，由浅入深，尝试去实现一套个人组件库，探索组件库设计以及开发思路。

`yolo-ui`作为一个学习组件开发的小 Demo，功能简单，存在各种缺陷，不可用于生产环境。该开源项目会不定期的更新，期待各位大佬点点 star。

## 安装

使用 npm 或 yarn 安装

```bash
npm install yolo-ui
```

```bash
yarn add yolo-ui
```

## 示例代码

```jsx
import { Button } from 'yolo-ui';

const App = () => (
  <>
    <Button type="primary">Yolo Button</Button>
  </>
)
```

引入样式：

```jsx
import "yolo-ui/dist/index.css";
```

## 已实现的组件

- [X] Button 按钮
- [X] Alert 警告提示
- [X] Menu 导航菜单
- [X] Tabs 标签页
- [X] Input 输入框
- [X] Icon 图标
- [X] AutoComplete 自动完成
- [X] Tag 标签
- [X] Progress 进度条
- [X] Select 选择器
- [X] Switch 开关
- [X] Upload 上传

## 开源协议

版权 (c) 2022-至今 归 izph 所有. 详情请阅 [LICENSE](./LICENSE).
