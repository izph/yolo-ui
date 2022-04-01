// React.CSSProperties -> style
import { FC } from 'react';
type MenuMode = 'vertical' | 'horizontal';
export type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  Item: FC<MenuItemProps>;
}

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface MenuContextProps {
  index: number;
  onSelect?: SelectCallback;
}
