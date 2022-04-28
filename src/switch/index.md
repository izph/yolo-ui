---
title: Switch 开关
group:
  title: 数据录入
  order: 8
nav:
  title: 组件
  path: /components
---

# Switch 开关

## 基本使用

```tsx
import React from 'react';
import { Switch } from 'yolo-ui';

export default () => {
  return (
    <>
      <Switch defaultChecked />
      <br />
      <Switch color={'red'} disabled defaultChecked />
      <br />
      <Switch size="lg" />
      <br />
      <Switch size="sm" />
      <br />
      <Switch onText={'开'} offText={'关'} />
    </>
  );
};
```
