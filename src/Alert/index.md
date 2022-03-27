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

## Demo

```tsx
import React, { Fragment } from 'react';
import { Alert } from 'yolo-ui';

export default () => {
  return (
    <Fragment>
      <Alert type="info">这是一条信息提示</Alert>
      <Alert type="success">这是一条成功提示</Alert>
      <Alert type="warning">这是一条警告提示</Alert>
      <Alert type="error">这是一条错误提示</Alert>
    </Fragment>
  );
};
```

## API

| 属性 |   说明   |                     类型                      | 默认值 |
| :--: | :------: | :-------------------------------------------: | :----: |
| type | 警告类型 | `info`、`success`、`error`、`warning`，非必填 | `info` |
