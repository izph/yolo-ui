import React from 'react';
import { MenuContextProps } from './interface';

const MenuContext = React.createContext<MenuContextProps>({
  index: '0',
});

export default MenuContext;
