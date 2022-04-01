// React.CSSProperties -> style

type MenuMode = 'vertical' | 'horizontal';
export type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
