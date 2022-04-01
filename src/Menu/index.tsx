import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { MenuProps, MenuItemProps, MenuContextProps } from './interface';
import MenuContext from './MenuContext';
import MenuItem from './MenuItem';

const RootMenu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  // 当前active是哪个
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const classes = classNames('yolo-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });

  const handleClick = (index: number) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: MenuContextProps = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };
  console.log(passedContext);
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>{children}</MenuContext.Provider>
    </ul>
  );
};

RootMenu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
};

const Menu = RootMenu as IMenuComponent;
Menu.Item = MenuItem;

export default Menu;
