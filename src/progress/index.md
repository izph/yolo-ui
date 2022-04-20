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
    <Progress theme="primary" percent={90} />
  </div>
);
```

## 含有辅助性文字介绍的警告提示

通过设置`description`属性。

```tsx
import React from 'react';
import { Alert } from 'yolo-ui';

export default () => (
  <div>
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </div>
);
```

## 可关闭的警告提示

设置`closable`属性可显示关闭警告提示按钮，添加`onClose`方法可在点击关闭按钮时触发回调函数。

```tsx
import React from 'react';
import { Alert } from 'yolo-ui';

export default () => (
  <div>
    <Alert
      message="Success Text"
      type="success"
      closable
      onClose={() => {
        console.log('close Success Text');
      }}
    />
    <Alert message="Info Text" type="info" closable />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
      closable
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
      closable
    />
  </div>
);
```

## API

| 属性        | 说明                     | 类型                                          | 默认值  |
| ----------- | ------------------------ | --------------------------------------------- | ------- |
| type        | 警告类型                 | `success \| info \| warning \| error`，非必填 | `info`  |
| message     | 警告提示内容             | `ReactNode`                                   | -       |
| description | 警告提示的辅助性文字介绍 | `ReactNode`                                   | -       |
| closable    | 是否显示关闭按钮         | `boolean`                                     | `false` |
| onClose     | 关闭时触发的回调函数     | `void`                                        | -       |
