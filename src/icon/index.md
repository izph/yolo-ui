---
title: Icon 图标
nav:
  title: 组件
  path: /components
group:
  title: 通用
  order: 2
---

# Icon 图标

## Icon 基于 Font Awesome 封装

更多用法请参考官方 Font Awesome 文档

[Font Awesome 官网](https://fontawesome.com/icons)

```tsx
import React from 'react';
import { Icon } from 'yolo-ui';

/*
 * size：["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","5x"]
 */
export default () => {
  return (
    <>
      <Icon icon="fa-mug-saucer" theme="primary" size="5x" />
      <Icon icon="fa-ban" size="5x" theme="danger" />
      <Icon icon="fa-bell" size="5x" theme="secondary" />
      <Icon icon="fa-comment" size="5x" theme="success" />
      <Icon icon="fa-file" size="5x" theme="info" />
      <Icon icon="location-pin" size="5x" theme="warning" />
      <Icon icon="yin-yang" size="5x" theme="dark" />
    </>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标的类型 | `string` | - |
| theme | 图标颜色 | `primary \| secondary \| success \| info \| warning \| danger \| light \| dark` | - |
