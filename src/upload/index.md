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

## 基本使用

```tsx
import React from 'react';
import { Upload, Button } from 'yolo-ui';

export default () => {
  const checkFileSize = (file) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big');
      return false;
    }
    return true;
  };
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      //   beforeUpload={checkFileSize}
    >
      <Button> Upload File</Button>
    </Upload>
  );
};
```

## 已上传的文件列表

```tsx
import React from 'react';
import { Upload, Button } from 'yolo-ui';

export default () => {
  const checkFileSize = (file) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big');
      return false;
    }
    return true;
  };
  const defaultFileList = [
    {
      uid: '123321',
      name: 'xxx.png',
      status: 'success',
      size: 50,
    },
    {
      uid: '123456',
      name: 'yyy.png',
      status: 'success',
      size: 50,
    },
    {
      uid: '123654',
      name: 'zzz.png',
      status: 'error',
      size: 50,
    },
  ];

  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      //   beforeUpload={checkFileSize}
      defaultFileList={defaultFileList}
    >
      <Button type="primary"> Upload File</Button>
    </Upload>
  );
};
```

## 拖拽上传

```tsx
import React from 'react';
import { Upload } from 'yolo-ui';

export default () => {
  const checkFileSize = (file) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big');
      return false;
    }
    return true;
  };
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      //   beforeUpload={checkFileSize}
      drag
    >
      Click or drag file to this area to upload
    </Upload>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认 |
| --- | --- | --- | --- |
| accept | 接受上传的文件类型 | `string` | - |
| action | 上传的地址 | `string或者(file) => Promise<string>` | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象 | `(file, fileList) => boolean 或者Promise<File>` | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | `object或者(file) => object或者Promise<object>` | - |
| drag | 是否支持拖拽上传 | `boolean` | `false` |
| defaultFileList | 默认已经上传的文件列表 | `object[]` | - |
| headers | 设置上传的请求头部 | `object` | - |
| multiple | 是否支持多选文件 | `boolean` | `false` |
| name | 发到后台的文件参数名 | `string` | `file` |
| withCredentials | 上传请求时是否携带 cookie | `boolean` | `false` |
| onChange | 上传文件改变时的状态 | `function(file)` | - |
| onSuccess | 请求成功时的回调 | `(data, file) => void` | - |
| onError | 请求失败时的回调 | `(data, file) => void` | - |
| onProgress | 文件正在上传时，处理的回调 | `(percentage: number, file: File) => void` | - |
| onRemove | 文件移除时执行的回调 | `(file: UploadFile) => void` | - |

### UploadFile

| 参数 | 说明 | 类型 | 默认 |
| --- | --- | --- | --- |
| uid | 唯一标识符，不设置时会自动生成 | `string` | - |
| size | 原生 `file` 类型的大小 | `number` | - |
| name | 文件名 | `string` | - |
| status | 上传状态，不同状态展示颜色也会有所不同 | `ready \| success \| error \| uploading` | - |
| percent | 上传进度，百分比 | `number` | - |
| raw | 元素文件信息 | `File` | - |
| response | 成功信息 | `any` | - |
| error | 失败信息 | `any` | - |
