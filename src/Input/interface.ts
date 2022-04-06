import React, { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'lg' | 'md' | 'sm';

// Omit移除或者忽略接口中的值 Omit<接口，需要忽略的值>
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix' | 'suffix'> {
  size?: InputSize;
  disabled?: boolean;
  prefix?: ReactNode; // 前缀
  suffix?: ReactNode; // 后缀
  icon?: ReactNode; // 图标
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
