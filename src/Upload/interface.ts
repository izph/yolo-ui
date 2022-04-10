import React from 'react';

// 准备上传、正在上传、上传成功、上传失败
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
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
export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}
export interface UploadProps {
  action: string; // 把文件发送到哪个接口，必填
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void; // 百分比，file
  onSuccess?: (data: any, file: File) => void; // 服务器返回的data
  onError?: (err: any, file: File) => void; // 服务器返回的err
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
  headers?: { [key: string]: any };
  name?: string;
  data?: { [key: string]: any };
  withCredentials?: boolean; // 是否携带cookie
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
}

export interface DraggerProps {
  onFile: (files: FileList) => void;
}
