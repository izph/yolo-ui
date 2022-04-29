export type SwitchSize = 'default' | 'sm';

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
) => void;
export interface SwitchProps {
  /* 主题颜色 */
  theme?: string;
  /** 是否被选中 */
  checked?: boolean;
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
  /** 状态切换时的回调 */
  onChange?: SwitchChangeEventHandler;
}
