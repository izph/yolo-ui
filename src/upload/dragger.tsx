import React, { FC, useState, DragEvent } from 'react';
import classNames from 'classnames';
import { DraggerProps } from './interface';

// 拖拽组件
export const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  // 根据dragOver的值，动态添加is-dragover类名
  const classes = classNames('yolo-uploader-dragger', {
    'is-dragover': dragOver,
  });

  // onDrop 当放置被拖 元素 时，会发生 drop 事件
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    // dataTransfer对象：拖拽对象用来传递的媒介
    onFile(e.dataTransfer.files);
  };

  // onDragOver 事件规定在何处放置被拖动的 元素
  // onDragLeave 被拖拽的元素离开可放置元素上方
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };

  return (
    <div
      className={classes}
      onDragOver={(e) => {
        handleDrag(e, true);
      }}
      onDragLeave={(e) => {
        handleDrag(e, false);
      }}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
