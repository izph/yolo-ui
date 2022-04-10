---
title: Select 选择器
group:
  title: 数据录入
  order: 5
nav:
  title: 组件
  path: /components
---

# Select 选择器

### 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

### 基本使用

```tsx
import React from 'react';
import { Select } from 'yolo-ui';

export default () => {
  const handleChange = (selectedValue: string, selectedValues: string[]) => {
    console.log(selectedValue, selectedValues);
  };

  const handleVisibleChange = (visible: boolean) => {
    console.log('visible', visible);
  };

  return (
    <Select placeholder="请选择" onChange={handleChange} onVisibleChange={handleVisibleChange}>
      <Select.Option value="item1" />
      <Select.Option value="item2" />
      <Select.Option value="item3" />
      <Select.Option value="disabled" disabled />
      <Select.Option value="item4" />
    </Select>
  );
};
```

### 多选

多选，从已有条目中选择。设置`multiple`属性

```tsx
import React from 'react';
import { Select } from 'yolo-ui';

export default () => {
  const handleChange = (selectedValue: string, selectedValues: string[]) => {
    console.log(selectedValue, selectedValues);
  };

  const handleVisibleChange = (visible: boolean) => {
    console.log('visible', visible);
  };

  return (
    <Select
      placeholder="多选"
      onChange={handleChange}
      onVisibleChange={handleVisibleChange}
      multiple
    >
      <Select.Option value="item1" />
      <Select.Option value="item2" />
      <Select.Option value="item3" />
      <Select.Option value="disabled" disabled />
      <Select.Option value="item4" />
    </Select>
  );
};
```

### 禁用

```tsx
import React from 'react';
import { Select } from 'yolo-ui';

export default () => (
  <div>
    <Select placeholder="禁用" disabled>
      <Select.Option value="item1" />
      <Select.Option value="item2" />
      <Select.Option value="item3" />
    </Select>
  </div>
);
```

### API

#### Select

| 参数 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| defaultValue | 默认选中的选项 | `string`、`string[]` | - |
| placeholder | 选择框默认文本 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| multiple | 是否支持多选 | `boolean` | - |
| onChange | 选中值发生变化时触发 | `function(value: string, selectedValues: string[])` | - |
| onVisibleChange | 下拉框出现/隐藏时触发 | `function(visible: boolean)` | - |

#### Select.Option

|   参数   |                  说明                   |   类型    | 默认值  |
| :------: | :-------------------------------------: | :-------: | :-----: |
|  index   |             item 的唯一标志             | `string`  |    -    |
|  value   | 默认根据此属性值进行筛选，该值不能相同  | `string`  |    -    |
|  label   | 选项的标签，若不设置则默认与 value 相同 | `string`  |    -    |
| disabled |                是否禁用                 | `boolean` | `false` |
