export type SwitchSize = 'lg' | 'md' | 'sm';

export interface SwitchProps {
  /* 主题颜色 */
  color?: string;
  /** 是否被选中 */
  checked?: string;
  /* 用户自定义类名 */
  className?: string;
  /** 组件的尺寸 */
  size?: SwitchSize;
  /** 是否被禁用 */
  disabled?: boolean;
  /** 开启状态的文本 */
  onText?: string;
  /** 关闭状态的文本 */
  offText?: string;
  /** 对外暴露的点击事件 */
  onClick?: () => void;
  /** 状态切换时的文本 */
  onChange?: () => void;
}
