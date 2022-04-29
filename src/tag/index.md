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
      <Tag text="Tag1" closable onClose={handleClick} />
      <Tag text="Tag2" closable={false} />
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
    <Tag text="Tag1" color="success" />
    <Tag text="Tag2" color="warning" />
    <Tag text="Tag3" color="danger" />
  </>
);
```

## 尺寸

```tsx
import React from 'react';
import { Tag } from 'yolo-ui';

export default () => (
  <>
    <Tag text="Tag1" size="sm" />
    <Tag text="Tag2" />
    <Tag text="Tag3" size="lg" />
  </>
);
```

## API

| 参数     | 说明             | 类型         | 默认值  |
| -------- | ---------------- | ------------ | ------- |
| closable | 标签是否可以关闭 | `boolean`    | `false` |
| color    | 标签色           | `string`     | -       |
| text     | Tag 的文本       | `string`     | -       |
| size     | Tag 的尺寸       | `string`     | -       |
| onClose  | 关闭时的回调     | `() => void` | -       |
