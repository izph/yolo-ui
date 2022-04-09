---
title: Upload 上传
group:
  title: 数据录入
  order: 10
nav:
  title: 组件
  path: /components
---

# Upload 上传

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。

- 当需要展现上传的进度时。

- 当需要使用拖拽交互时。

### 基本使用

```tsx
import React from 'react';
import { Upload } from 'yolo-ui';

export default () => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big');
      return false;
    }
    return true;
  };
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={checkFileSize}
    />
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

interface LakerPlayerProps {
  value: string;
  number: number;
}

export default () => {
  const lakersWithNumber = [
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

  const handleSearch = (query: string) =>
    lakersWithNumber.filter((player) => player.value.includes(query));

  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>;
    return (
      <>
        <b>字母: {itemWithNumber.value}</b>
        <span>数字编号: {itemWithNumber.number}</span>
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

### ajax 请求下拉选项

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

| 参数         | 说明                                  | 类型            |
| ------------ | ------------------------------------- | --------------- |
| onSearch     | 搜索补全项的时候调用                  | function(value) |
| onSelect     | 被选中时调用，参数为选中项的 value 值 | function(value) |
| renderOption | 自定义渲染下拉选项                    | function(value) |
