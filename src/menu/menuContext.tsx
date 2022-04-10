import React, { createContext } from 'react';
// import { MenuContextProps } from './interface';
import { MenuMode, SelectCallback } from './index';
export interface MenuContextProps {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenKeys?: string[];
}

const MenuContext = createContext<MenuContextProps>({
  index: '0',
});

export default MenuContext;
