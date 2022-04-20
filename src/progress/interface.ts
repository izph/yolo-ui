import React from 'react';

export type ProgressThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
export interface ProgressProps {
  /* 百分比 */
  percent: number;
  /* 设置高度 */
  strokeHeight?: number;
  /* 是否显示百分比文字 */
  showText?: boolean;
  /* 用户自定义样式 */
  style?: React.CSSProperties;
  /* 进度条主题颜色 */
  theme?: ProgressThemeProps;
}
