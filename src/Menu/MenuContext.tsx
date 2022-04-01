import { createContext } from 'react';
import { MenuContextProps } from './interface';

const MenuContext = createContext<MenuContextProps>({
  index: 0,
});

export default MenuContext;
