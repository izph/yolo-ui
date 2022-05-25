import React from 'react';

// 准备上传、正在上传、上传成功、上传失败
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

// 文件的属性
export interface UploadFile {
  uid: string;
  size: number; // 大小，原生
  name: string; // 名字，原生
  status?: UploadFileStatus; // 状态
  percent?: number; // 上传进度，百分比
  raw?: File; // 原生文件信息
  response?: any; // 成功信息
  error?: any; // 失败信息
}

// 文件的列表
export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

// 定义Upload上传组件的属性
export interface UploadProps {
  // 把文件发送到哪个接口，必填
  action: string;

  // 默认的文件列表
  defaultFileList?: UploadFile[];

  // 设置上传的请求头部
  headers?: { [key: string]: any };

  // 发到后台的文件参数名
  name?: string;

  // 上传所需额外参数或返回上传额外参数的方法
  data?: { [key: string]: any };

  // 是否携带cookie
  withCredentials?: boolean;

  // 接受上传的文件类型
  accept?: string;

  // 是否支持多选文件，开启后按住 ctrl 可选择多个文件
  multiple?: boolean;

  // 是否支持拖拽上传文件
  drag?: boolean;

  // 上传之前的回调
  beforeUpload?: (file: File) => boolean | Promise<File>;

  // 正在上传时执行的回调，percentage上传进度，file上传的文件
  onProgress?: (percentage: number, file: File) => void;

  // 上传成功的回调，服务器返回的data，file已上传的文件
  onSuccess?: (data: any, file: File) => void;

  // 上传失败的回调，err是服务器返回的错误信息
  onError?: (err: any, file: File) => void;

  // 上传中、完成、失败都会调用这个函数
  onChange?: (file: File) => void;

  // 点击移除文件时的回调
  onRemove?: (file: UploadFile) => void;
}

export interface DraggerProps {
  onFile: (files: FileList) => void;
}
