// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }

// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Dangerous = 'danger',
//     Link = 'link',
// }

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'info' | 'dashed' | 'warning';
export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';
export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
// button 和 a链接 的原生属性太多了，可以直接把全部属性加上
// 从哪里可以找到button所有的props？react已经提供好的
// ButtonHTMLAttributes<HTMLElement> 所有button属性
// AnchorHTMLAttributes<HTMLElement> 所有a标签属性
// & 交叉类型   合并
type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;

type AnchorButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;

// Partial<T> 将类型的属性变成可选，只支持处理第一层的属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
