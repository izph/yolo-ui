---
title: 关于 Yolo UI
nav:
  title: 指南
---

# Yolo UI

`yolo-ui`，是一套基于 `dumi`，由 `React` + `TypeScript` + `Less` 开发的个人组件库。一直以来，都只是停留在会使用各种 `优秀`的开源组件库，从来没有想过这些组件库是如何开发的。直到现在，自己参考了[ant-design](https://ant.design/index-cn)、[arco-design](https://arco.design/)等多个组件库，并参考了网上的学习资源，由浅入深，尝试去实现一套个人组件库，探索组件库设计以及开发思路。

`yolo-ui`作为一个学习组件开发的小 Demo，功能简单，存在各种缺陷，不可用于生产环境。该开源项目会不定期的更新，期待各位大佬点点 star⭐。

## 快速上手

### 安装

使用 npm 安装

```bash
npm install yolo-ui
```

### 示例代码

```jsx | pure
import { Button } from 'yolo-ui';

const App = () => (
  <>
    <Button type="primary">Yolo Button</Button>
  </>
)
```

### 引入样式

```jsx | pure
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
## 作者

技术社区名字：iZph

- [Github](https://github.com/izph)
- [个人博客](http://blog.yolo-ui.xyz)
