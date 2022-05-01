---
title: Menu 导航菜单
nav:
  title: 组件
  path: /components
group:
  title: 导航
  order: 3
---

# Menu 导航菜单

## 水平菜单

水平的顶部导航菜单。`mode`值为 `horizontal`。

```tsx
import React from 'react';
import { Menu } from 'yolo-ui';

export default () => {
  return (
    <Menu
      onClick={(index) => {
        console.log(index);
      }}
      // mode="vertical"
      // defaultOpenKeys={['3']}
    >
      <Menu.Item>菜单1</Menu.Item>
      <Menu.Item>菜单2</Menu.Item>
      <Menu.Item>菜单3</Menu.Item>
      <Menu.Item>菜单4</Menu.Item>
    </Menu>
  );
};
```

## 垂直菜单

垂直菜单，子菜单内嵌在菜单区域。`mode`值为 `vertical`。

```tsx
import React from 'react';
import { Menu } from 'yolo-ui';
export default () => (
  <Menu mode="vertical">
    <Menu.Item>菜单1</Menu.Item>
    <Menu.Item>菜单2</Menu.Item>
    <Menu.Item>菜单3</Menu.Item>
    <Menu.Item>菜单4</Menu.Item>
  </Menu>
);
```

## 展开子菜单

通过 `defaultOpenKeys`设置当前展开的 `SubMenu` 菜单项 `key` 数组

点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

```tsx
import React from 'react';
import { Menu } from 'yolo-ui';

const { SubMenu } = Menu;

export default () => (
  <Menu mode="vertical" defaultIndex="1-0" defaultOpenKeys={['1']}>
    <Menu.Item>菜单1</Menu.Item>
    <SubMenu title="菜单2">
      <Menu.Item>菜单2-1</Menu.Item>
      <Menu.Item>菜单2-2</Menu.Item>
    </SubMenu>
    <Menu.Item>菜单3</Menu.Item>
    <Menu.Item>菜单4</Menu.Item>
  </Menu>
);
```

## API

### Menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultOpenKeys | 初始展开的 `SubMenu` 菜单项 key 数组 | `string[]` | - |
| defaultIndex | 初始选中的菜单项 key 数组 | `string` | - |
| mode | 菜单类型，现在支持水平、垂直模式两种 | `horizontal`、`vertical` | `horizontal` |
| style | 根节点样式 | `CSSProperties` | - |
| onClick | 点击 MenuItem 调用此函数 | `function({ item, key, keyPath, domEvent })` | - |

### Menu.Item

| 参数     | 说明            | 类型      | 默认值  |
| -------- | --------------- | --------- | ------- |
| disabled | 是否禁用        | `boolean` | `false` |
| index    | item 的唯一标志 | `string`  | -       |

### Menu.SubMenu

| 参数     | 说明           | 类型                         | 默认值 |
| -------- | -------------- | ---------------------------- | ------ |
| children | 子菜单的菜单项 | `Array<MenuItem \| SubMenu>` | -      |
| index    | 唯一标志       | `string`                     | -      |
| title    | 子菜单项值     | `ReactNode`                  | -      |
