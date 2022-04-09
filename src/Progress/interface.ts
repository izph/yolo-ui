import { ThemeProps } from '../Icon/index';
import React from 'react';

export interface ProgressProps {
  percent: number; // 百分比
  strokeHeight?: number; // 设置高度
  showText?: boolean; // 是否显示百分比文字
  styles?: React.CSSProperties; // 用户自定义样式
  theme?: ThemeProps; // 进度条主题颜色
}
