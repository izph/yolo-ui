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

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；

- 和`checkbox`的区别是，切换`switch`会直接触发状态改变，而`checkbox`一般用于状态标记，需要和提交操作配合。

## 基本使用

```tsx
import React from 'react';
import { Switch } from 'yolo-ui';

export default () => {
  return (
    <>
      <Switch checked />
      <br />
      <br />
      <Switch />
    </>
  );
};
```

## 禁止使用

```tsx
import React from 'react';
import { Switch } from 'yolo-ui';

export default () => {
  return (
    <>
      <Switch disabled />
      <br />
      <br />
      <Switch disabled checked />
    </>
  );
};
```

## 定制主题颜色

```tsx
import React from 'react';
import { Switch } from 'yolo-ui';

export default () => {
  return (
    <>
      <Switch theme={'green'} checked />
      <br />
      <br />
      <Switch theme={'red'} checked />
      <br />
      <br />
      <Switch theme={'yellow'} checked />
      <br />
      <br />
      <Switch theme={'pink'} checked />
      <br />
      <br />
      <Switch theme={'bule'} checked />
    </>
  );
};
```

## 组件尺寸

```tsx
import React from 'react';
import { Switch } from 'yolo-ui';

export default () => {
  return (
    <>
      <Switch checked size="sm" />
      <br />
      <br />
      <Switch checked />
    </>
  );
};
```

## 开关内容

```tsx
import React from 'react';
import { Switch } from 'yolo-ui';

export default () => {
  return (
    <>
      <Switch
        onText={'开'}
        offText={'关'}
        onChange={(checked, e) => {
          console.log(checked, e);
        }}
        checked
      />
    </>
  );
};
```

## API

| 参数     | 说明                 | 类型                                       | 默认值  |
| -------- | -------------------- | ------------------------------------------ | ------- |
| theme    | 开关主题颜色         | `string`                                   | `#09f`  |
| checked  | 是否被选中           | `boolean`                                  | `false` |
| size     | 开关大学             | `default \| sm`                            | -       |
| disabled | 是否被禁用           | `boolean`                                  | `false` |
| onText   | 开启状态的文本       | `string \| ReactNode`                      | -       |
| offText  | 关闭状态的文本       | `string \| ReactNode`                      | -       |
| onChange | 选中值发生变化时触发 | `function(checked: boolean, event: Event)` | -       |
