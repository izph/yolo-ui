export type ColorProps = 'primary' | 'success' | 'warning' | 'danger';

export interface TagProps {
  /** 自定义类名 */
  className?: string;
  /** Tag的主题色 */
  color?: ColorProps;
  /** Tag的尺寸 */
  size?: 'lg' | 'sm';
  /** Tag的文本 */
  text: string;
  /** 关闭Tag */
  onClose?: () => void;
  /** 是否显示关闭图标 */
  closable?: boolean;
}
