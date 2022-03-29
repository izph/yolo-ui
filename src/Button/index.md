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

## Demo

```tsx
import React from 'react';
import { Button } from 'yolo-ui';

export default () => {
  return (
    <>
      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="link">按钮</Button>
    </>
  );
};
```

## API

| 属性 |   说明   |                     类型                      | 默认值 |
| :--: | :------: | :-------------------------------------------: | :----: |
| type | 警告类型 | `info`、`success`、`error`、`warning`，非必填 | `info` |
