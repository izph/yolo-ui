---
title: AutoComplete 自动完成
group:
  title: 数据录入
  order: 2
nav:
  title: 组件
  path: /components
---
# AutoComplete 自动完成

输入框自动完成功能。

### 何时使用

- 需要一个输入框而不是选择器。
- 需要输入建议或者辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入。
- Select 是在限定的可选项中进行选择，关键词是选择。

### 基本使用

```tsx
import React from 'react';
import { AutoComplete } from 'yolo-ui';

export default () => {
  const strArr = [
    '1',
    '11',
    '111',
    '2',
    '22',
    '222',
    '3',
    '33',
    '333',
    '4',
    '44',
    '444',
    '123',
    '234',
    '134',
    '124',
  ];

  const handleSearch = (query: string) =>
    strArr.filter((item) => item.includes(query)).map((item) => ({ value: item }));

  return (
    <div>
      <div>请输入 1 或 2 或 3 或 4</div>
      <AutoComplete onSearch={handleSearch} />
    </div>
  );
};
```

### 自定义渲染下拉选项

```tsx
import React from 'react';
import { AutoComplete } from 'yolo-ui';

interface DataSourceObject {
  value: string;
}

interface testDataProps {
  value: string;
  number: number;
}

export default () => {
  const searchData = [
    { value: 'a', number: 0 },
    { value: 'aa', number: 1 },
    { value: 'aaa', number: 2 },
    { value: 'b', number: 3 },
    { value: 'bb', number: 4 },
    { value: 'bbb', number: 5 },
    { value: 'c', number: 6 },
    { value: 'cc', number: 7 },
    { value: 'ccc', number: 8 },
    { value: 'd', number: 9 },
    { value: 'dd', number: 10 },
    { value: 'ddd', number: 11 },
  ];

  const handleSearch = (query: string) => searchData.filter((item) => item.value.includes(query));

  const renderOption = (item: DataSourceType) => {
    const searchDataItem = item as DataSourceType<testDataProps>;
    return (
      <>
        <span>value值: {searchDataItem.value}</span>
        <span style={{ marginLeft: '20px' }}>对应编号: {searchDataItem.number}</span>
      </>
    );
  };

  return (
    <div>
      <div>请输入 a 或 b 或 c 或 d</div>
      <AutoComplete onSearch={handleSearch} renderOption={renderOption} />
    </div>
  );
};
```

### fetch 请求下拉选项

```tsx
import React from 'react';
import { AutoComplete } from 'yolo-ui';

interface DataSourceObject {
  value: string;
}

interface GithubUserProps {
  login: string;
  url: string;
  // eslint-disable-next-line camelcase
  avatar_url: string;
}

export default () => {
  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>;
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    );
  };
  const handleSearch = (query: string) =>
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        if (typeof items !== 'undefined') {
          return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }));
        }
        return [];
      });

  return (
    <div>
      <div>请输入任意 Github 用户名</div>
      <AutoComplete onSearch={handleSearch} renderOption={renderOption} />
    </div>
  );
};
```

### API

| 参数         | 说明                                  | 类型                                                              |
| ------------ | ------------------------------------- | ----------------------------------------------------------------- |
| onSearch     | 搜索补全项的时候调用                  | `(str: string) => DataSourceType[] \| Promise<DataSourceType[]>` |
| onSelect     | 被选中时调用，参数为选中项的 value 值 | `(item: DataSourceType) => void`                                |
| renderOption | 自定义渲染下拉选项                    | `(item: DataSourceType) => ReactElement`                        |

#### 说明

```ts
export interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;
```
