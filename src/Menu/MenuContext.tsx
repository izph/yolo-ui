import { createContext } from 'react';
import { SelectCallback } from './interface';
export interface MenuContextProps {
  index: number;
  onSelect?: SelectCallback;
}

const MenuContext = createContext<MenuContextProps>({
  index: 0,
});

export default MenuContext;
