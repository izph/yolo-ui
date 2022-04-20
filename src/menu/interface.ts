// React.CSSProperties -> style
import React from 'react';

/* 菜单类型: 水平或垂直 */
export type MenuMode = 'horizontal' | 'vertical';

export type SelectCallback = (selectKey: string) => void;
export interface MenuProps {
  /* 设置默认 */
  defaultIndex?: string;
  className?: string;
  /* 菜单类型 */
  mode?: MenuMode;
  style?: React.CSSProperties;
  /* 点击菜单的回调 */
  onSelect?: SelectCallback;
  /* 
    初始展开的SubMenu菜单项key数组, 只在纵向模式下生效
  */
  defaultOpenKeys?: string[];
}

export interface MenuItemProps {
  /* 菜单项唯一标识 */
  index?: string;
  /* 菜单禁止点击 */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface MenuContextProps {
  /* 菜单项唯一标识 */
  index: string;
  /* 点击菜单的回调 */
  onSelect?: SelectCallback;
  /* 菜单类型 */
  mode?: MenuMode;
  /* 
    初始展开的SubMenu菜单项key数组, 只在纵向模式下生效
  */
  defaultOpenKeys?: string[];
}

export interface SubMenuProps {
  /* 菜单项唯一标识 */
  index?: string;
  /* 菜单标题 */
  title?: string;
  className?: string;
  style: React.CSSProperties;
}
