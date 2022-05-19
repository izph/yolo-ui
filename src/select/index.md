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
- 当选项多于8项时，选择列表将出现滚动条。

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
    <div>
      <div>
        <Select
        placeholder="请选择"
        onChange={handleChange}
        onVisibleChange={handleVisibleChange}
        // defaultValue={"item1"}
        style={{width: 200}}
        >
          <Select.Option value="a11" />
          <Select.Option value="b12" />
          <Select.Option value="c13" />
          <Select.Option value="d14"/>
          <Select.Option value="e15" />
        </Select>
      </div>
      <div>
        <Select
        placeholder="disabled"
        onChange={handleChange}
        onVisibleChange={handleVisibleChange}
        defaultValue={"a11"}
        style={{width: 200}}
        >
          <Select.Option value="a11" />
          <Select.Option value="b12" disabled/>
          <Select.Option value="c13" />
          <Select.Option value="d14" disabled/>
          <Select.Option value="e15" />
        </Select>
      </div>
    </div>
  );
};
```

### 多选

多选，从已有条目中选择。设置 `multiple`属性

```tsx
import React from 'react';
import { Select } from 'yolo-ui';
const Option = Select.Option;

export default () => {
  const handleChange = (selectedValue: string, selectedValues: string[]) => {
    console.log(selectedValue, selectedValues);
  };

  const handleVisibleChange = (visible: boolean) => {
    console.log('visible', visible);
  };

  const children = [];
  for (let i = 10; i < 24; i++) {
    children.push(<Option key={i} value={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  return (
    <Select
      placeholder="多选"
      onChange={handleChange}
      onVisibleChange={handleVisibleChange}
      multiple
    >
      {children}
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
      <Select.Option value="1" />
      <Select.Option value="2" />
      <Select.Option value="3" />
    </Select>
  </div>
);
```

### API

#### Select

| 参数            | 说明                  | 类型                                                  | 默认值    |
| --------------- | --------------------- | ----------------------------------------------------- | --------- |
| defaultValue    | 默认选中的选项        | `string`、`string[]`                              | -         |
| placeholder     | 选择框默认文本        | `string`                                            | -         |
| disabled        | 是否禁用              | `boolean`                                           | `false` |
| multiple        | 是否支持多选          | `boolean`                                           | -         |
| onChange        | 选中值发生变化时触发  | `function(value: string, selectedValues: string[])` | -         |
| onVisibleChange | 下拉框出现/隐藏时触发 | `function(visible: boolean)`                        | -         |

#### Select.Option

| 参数     | 说明                                    | 类型        | 默认值    |
| -------- | --------------------------------------- | ----------- | --------- |
| index    | item 的唯一标志                         | `string`  | -         |
| value    | 默认根据此属性值进行筛选，该值不能相同  | `string`  | -         |
| label    | 选项的标签，若不设置则默认与 value 相同 | `string`  | -         |
| disabled | 是否禁用                                | `boolean` | `false` |
