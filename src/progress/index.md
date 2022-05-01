---
title: Progress 进度条
nav:
  title: 组件
  path: /components
group:
  title: 反馈
  order: 7
---

# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。

## 基本样式

基本样式分为 7 种，默认类型为 `primary`。

`primary` | `secondary` | `success` | `info` | `warning` | `danger` | `dark`

```tsx
import React from 'react';
import { Progress } from 'yolo-ui';

export default () => (
  <div>
    <Progress percent={20} />
    <br />
    <Progress theme="secondary" percent={30} />
    <br />
    <Progress theme="success" percent={40} />
    <br />
    <Progress theme="info" percent={50} />
    <br />
    <Progress theme="warning" percent={60} />
    <br />
    <Progress theme="danger" percent={70} />
    <br />
    <Progress theme="dark" percent={80} />
    <br />
    <Progress theme="primary" percent={100} />
  </div>
);
```

## 自定义高度

```tsx
import React from 'react';
import { Progress } from 'yolo-ui';

export default () => (
  <div>
    <Progress percent={20} strokeHeight={15} />
    <br />
    <Progress theme="success" percent={40} strokeHeight={20} />
    <br />
    <Progress theme="warning" percent={60} strokeHeight={30} />
    <br />
    <Progress theme="danger" percent={70} strokeHeight={40} />
  </div>
);
```

## 是否显示百分比文字

通过设置`showText`属性。

```tsx
import React from 'react';
import { Progress } from 'yolo-ui';

export default () => (
  <div>
    <Progress percent={30} showText={false} />
    <br />
    <Progress theme="success" percent={40} strokeHeight={20} showText={false} />
    <br />
    <Progress theme="warning" percent={60} strokeHeight={30} showText={false} />
  </div>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 主题颜色 | `primary` \| `secondary` \| `success` \| `info` \| `warning` \| `danger` \| `dark`，非必填 | `primary` |
| percent | 百分比 | `number` | - |
| strokeHeight | 进度条高度 | `number` | - |
| showText | 是否显示百分比文字 | `boolean` | `true` |
| style | 自定义样式 | `React.CSSProperties` | - |
