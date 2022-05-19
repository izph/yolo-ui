import React, { ReactNode } from 'react';

export type AlertType = 'info' | 'success' | 'error' | 'warning';

export interface AlertProps {
  /**
   * 警告提示内容
   */
  message: string;
  /**
   * 警告内容描述
   */
  description?: string;
  /**
   * 警告的类型
   * defaultValue: info
   */
  type?: AlertType;
  /**
   * 是否可关闭
   */
  closable?: boolean;
  /**
   * 是否显示图标
   */
  showIcon?: boolean;
  /**
   * 自定义图标
   */
  icon?: ReactNode;
  /**
   * 用户自定义的类名
   */
  className?: string;
  /**
   * 用户自定义的样式
   */
  style?: React.CSSProperties;
  /**
   * 关闭的回调
   */
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
