// React.CSSProperties -> style
import React from 'react';

export type MenuMode = 'vertical' | 'horizontal';
export type SelectCallback = (index: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenKeys?: string[]; // 初始展开的 SubMenu 菜单项 key 数组 只在纵向模式下生效
}

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface MenuContextProps {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenKeys?: string[];
}

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  style: React.CSSProperties;
}
