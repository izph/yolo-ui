---
title: Tag 标签
group:
  title: 数据展示
  order: 8
nav:
  title: 组件
  path: /components
---

# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 基本

```tsx
import React from 'react';
import { Tag } from 'yolo-ui';

export default () => {
  const handleClick = () => {
    console.log('close');
  };

  return (
    <>
      <Tag text="Tag1" />
      <Tag text="Tag2" closable onClose={handleClick} />
    </>
  );
};
```

## 颜色

```tsx
import React from 'react';
import { Tag } from 'yolo-ui';

export default () => (
  <>
    <Tag text="Tag-primary" color="primary" />
    <Tag text="Tag-success" color="success" />
    <Tag text="Tag-warning" color="warning" />
    <Tag text="Tag-danger" color="danger" />
  </>
);
```

## 尺寸

```tsx
import React from 'react';
import { Tag } from 'yolo-ui';

export default () => (
  <>
    <Tag text="Tag-sm" size="sm" />
    <Tag text="Tag" />
    <Tag text="Tag-lg" size="lg" />
  </>
);
```

## API

| 参数     | 说明             | 类型                                      | 默认值  |
| -------- | ---------------- | ----------------------------------------- | ------- |
| closable | 标签是否可以关闭 | `boolean`                                 | `false` |
| color    | 标签色           | `primary \| success \| warning \| danger` | -       |
| text     | Tag 的文本       | `string`                                  | -       |
| size     | Tag 的尺寸       | `string`                                  | -       |
| onClose  | 关闭时的回调     | `() => void`                              | -       |
