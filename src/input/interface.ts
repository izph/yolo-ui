import React, { InputHTMLAttributes, ReactNode } from 'react';

/* 输入框的大小 */
export type InputSize = 'lg' | 'md' | 'sm';

/* 
  接口中的属性和自定义的属性同名时， 
  使用Omit移除或者忽略接口中的值 Omit<接口，需要忽略的值>
*/
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix' | 'suffix'> {
  size?: InputSize;
  /* 禁止输入 */
  disabled?: boolean;
  /* 输入框的前缀 */
  prefix?: ReactNode;
  /* 输入框的后缀 */
  suffix?: ReactNode;
  /* 图标 */
  icon?: ReactNode;
  /* 值发生改变时的回调 */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
