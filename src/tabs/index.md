---
title: Tabs 标签页
group:
  title: 数据展示
  order: 7
nav:
  title: 组件
  path: /components
---
# Tabs 标签页
## 何时使用

- 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。

## 基本使用

默认选中第一项`TabPane`，默认的type是`line`。

```tsx
import React from 'react';
import { Tabs } from 'yolo-ui';

const { TabPane } = Tabs;

export default () => {
  const handleClick = (key: number) => {
    console.log(key);
  };

  return (
    <Tabs onTabClick={handleClick} className={"tabs-test"}>
      <TabPane tab="Tab 1">Content of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2">Content of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3">Content of Tab Pane 3</TabPane>
    </Tabs>
  );
};
```

## 禁用TabPane

禁用某一项。

```tsx
import React from 'react';
import { Tabs } from 'yolo-ui';

const { TabPane } = Tabs;

export default () => (
  <Tabs defaultActiveKey={1}>
    <TabPane tab="Tab 1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" disabled>
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
```

## 卡片式页签

`type`为`card`类型的tabs页签。

```tsx
import React from 'react';
import { Tabs } from 'yolo-ui';

const { TabPane } = Tabs;

export default () => (
  <Tabs defaultActiveKey={0} type="card">
    <TabPane tab="Tab 1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3">Content of Tab Pane 3</TabPane>
  </Tabs>
);
```

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | `number` | `0` |
| type | 页签的基本样式，可选 line、card 类型 | `string ` | `line` |
| onTabClick | tab 被点击的回调 | `function(key: number)` | - |

### Tabs.TabPane

| 参数     | 说明             | 类型        | 默认值  |
| -------- | ---------------- | ----------- | ------- |
| disabled | 是否禁用         | `boolean`   | `false` |
| tab      | 选项卡头显示文字 | `ReactNode` | -       |
