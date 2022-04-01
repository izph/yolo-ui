---
title: Menu 导航菜单
nav:
  title: 组件
  path: /components
group:
  title: 导航
  order: 3
---

# Menu 导航菜单

水平的顶部导航菜单。`mode`值为`horizontal`。

```tsx
import React from 'react';
import { Menu } from 'yolo-ui';

export default () => {
  const onClick = (index: string) => {
    console.log('click: ', index);
  };
  return (
    <Menu onSelect={onClick}>
      <Menu.Item>菜单1</Menu.Item>
      <Menu.Item>菜单2</Menu.Item>
      <Menu.Item>菜单3</Menu.Item>
      <Menu.Item>菜单4</Menu.Item>
    </Menu>
  );
};
```

## 按钮尺寸

尺寸`size`分为大、中、小，默认尺寸是中。 `lg` | `md` | `sm`

```tsx
import React from 'react';
import { Button } from 'yolo-ui';

export default () => {
  return (
    <div id="button-demo-display-size">
      <Button size="lg" type="primary">
        Large
      </Button>
      <Button size="md" type="danger">
        Medium
      </Button>
      <Button size="sm" type="warning">
        Small
      </Button>
    </div>
  );
};
```

## 按钮的禁用状态

添加`disabled`属性即可让按钮处于禁用状态，同时按钮样式也会改变。

```tsx
import React from 'react';
import { Button } from 'yolo-ui';

export default () => {
  return (
    <div id="button-demo-display-size">
      <Button type="primary" disabled>
        主按钮
      </Button>
      <Button disabled>默认按钮</Button>
      <Button type="link" disabled>
        链接按钮
      </Button>
    </div>
  );
};
```

## API

通过设置 `Button` 的属性来产生不同的按钮样式，推荐顺序为：`type` > `size` -> `disabled`。按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| type | 设置按钮类型 | `default`、`primary`、`info`、 `warning`、`danger`、`dashed`、`link`，非必填 | `default` |
| size | 设置按钮大小 | `lg`、`md`、`sm`，非必填 | `md` |
| disabled | 按钮禁用状态 | boolean | `false` |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| onClick | 点击按钮时的回调 | (event) => void | - |
