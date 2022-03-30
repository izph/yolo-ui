---
title: Button 按钮
nav:
  title: 组件
  path: /components
group:
  title: 通用
  order: 1
---

# Button 按钮

## 按钮的类型

按钮分为七种类型`type`，默认是`default`。

`default` | `primary` | `info` | `warning` | `danger` | `dashed` | `link`

```tsx
import React from 'react';
import { Button } from 'yolo-ui';

export default () => {
  return (
    <div id="button-demo-display-type">
      <Button type="default">默认按钮</Button>
      <Button type="primary">主按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="dashed">虚线按钮</Button>
      <Button type="link" href="https://github.com/izph">
        链接按钮
      </Button>
    </div>
  );
};
```

## API

| 属性 |   说明   |                     类型                      | 默认值 |
| :--: | :------: | :-------------------------------------------: | :----: |
| type | 警告类型 | `info`、`success`、`error`、`warning`，非必填 | `info` |
