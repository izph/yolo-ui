---
title: Input 输入框
group:
  title: 数据录入
  order: 6
nav:
  title: 组件
  path: /components
---
# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

**何时使用**

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

### 基本使用

```tsx
import React from 'react';
import { Input } from 'yolo-ui';

export default () => (
  <div>
    <Input placeholder="基本使用" />
  </div>
);
```

### 三种大小

输入框定义了三种尺寸 size（大 `lg`、默认 `md`、小 `sm`）

```tsx
import React from 'react';
import { Input } from 'yolo-ui';

export default () => (
  <div>
    <Input size="lg" placeholder="large size" />
    <Input size="md" placeholder="default size" />
    <Input size="sm" placeholder="small size" />
  </div>
);
```

### 禁用

设置禁用状态 `disabled`，默认为 false

```tsx
import React from 'react';
import { Input } from 'yolo-ui';

export default () => (
  <div>
    <Input placeholder="disabled" disabled />
  </div>
);
```

### 前缀与后缀

在输入框上添加前缀 `prefix`或后缀 `suffix`图标。

```tsx
import React from 'react';
import { Input } from 'yolo-ui';

export default () => (
  <div>
    <Input placeholder="prefix" prefix="http://" />
    <Input placeholder="suffix" suffix=".com" />
  </div>
);
```

### 图标

如添加一个向下箭头的图标

```tsx
import React from 'react';
import { Input, Icon } from 'yolo-ui';

export default () => (
  <div>
    <Input placeholder="基本使用" icon={<Icon icon="fa-arrow-down-long" />} />
  </div>
);
```

### API

|   参数   |                          说明                          |         类型         |  默认值  |
| :------: | :-----------------------------------------------------: | :------------------: | :-------: |
| disabled |                      是否禁用状态                      |     `boolean`     | `false` |
|    id    |                     输入框的 `id`                     |      `string`      |     -     |
|  prefix  |                  带有前缀的 `input`                  | `ReactNode\|string` |     -     |
|   size   |                       控件大小。                       |   `lg \| md \| sm`   |     -     |
|  suffix  |                  带有后缀的 `input`                  | `ReactNode\|string` |     -     |
|   type   | 声明 `input`类型，同原生 `input`标签的 `type`属性 |      `string`      | `text` |
|  value  |                       输入框内容                       |      `string`      |     -     |
|   icon   |                          图标                          |    `ReactNode`    |     -     |
| onChange |                 输入框内容变化时的回调                 |   `function(e)`   |     -     |
