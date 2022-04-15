---
title: Alert 警告提示
nav:
  title: 组件
  path: /components
group:
  title: 反馈
  order: 5
---

# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 警告样式

警告提示分为四种样式，默认类型为 `info`，`message`为内容信息。

```tsx
import React from 'react';
import { Alert } from 'yolo-ui';

export default () => (
  <div>
    <Alert type="info" message="Info Text" />
    <Alert type="warning" message="Warning Text" />
    <Alert type="success" message="Success Text" />
    <Alert type="error" message="Error Text" />
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
