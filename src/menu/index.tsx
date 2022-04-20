import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { MenuProps, MenuItemProps, MenuContextProps, SubMenuProps } from './interface';
import MenuContext from './MenuContext';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

// import MenuItem, { MenuItemProps } from './MenuItem';
// import SubMenu, { SubMenuProps } from './SubMenu';

import './style/index';

// export type MenuMode = 'horizontal' | 'vertical';
// export type SelectCallback = (selectKey: string) => void;
// export interface MenuProps {
//   defaultIndex?: string;
//   className?: string;
//   mode?: MenuMode;
//   style?: React.CSSProperties;
//   onClick?: SelectCallback;
//   defaultOpenKeys?: string[]; // 初始展开的 SubMenu 菜单项 key 数组 只在纵向模式下生效
// }

const RootMenu: FC<MenuProps> = ({
  className,
  mode,
  style,
  children,
  defaultIndex,
  onSelect,
  defaultOpenKeys,
}) => {
  // const { className, mode, style, children, defaultIndex, onSelect, defaultOpenKeys } = props;
  // 当前active是哪个
  const [currentSelectedKey, setCurrentSelectedKey] = useState(defaultIndex);
  const classes = classNames('yolo-menu', className, {
    'yolo-menu-vertical': mode === 'vertical',
    'yolo-menu-horizontal': mode === 'horizontal',
  });

  const handleClick = (index: string) => {
    setCurrentSelectedKey(index);
    if (typeof onSelect === 'function') {
      onSelect(index);
    }
  };

  const passedContext: MenuContextProps = {
    index: currentSelectedKey || '0',
    onSelect: handleClick,
    mode,
    defaultOpenKeys,
  };

  const renderChildren = () =>
    React.Children.map(children, (child, index) => {
      //  child 是 ReactNode 类型，先断言成 FunctionComponentElement 类型，再拿到 displayName 内置属性
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 添加 index 属性，利用遍历时可以拿到的 index 变量来设置，这样使用时则无需给 MenuItem 传入 index 属性
        return React.cloneElement(childElement, {
          index: index.toString(),
          // index
        });
      }
      // eslint-disable-next-line no-console
      console.error('Warning: Menu has a child which is not a MenuItem component');
    });

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

RootMenu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenKeys: [],
};

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};

const Menu = RootMenu as IMenuComponent;
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
