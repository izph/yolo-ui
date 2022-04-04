import React, { FC, useContext, CSSProperties } from 'react';
import classNames from 'classnames';
// import { MenuItemProps } from './interface';
import MenuContext from './MenuContext';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MenuItem: FC<MenuItemProps> = ({ className, index, style, children, disabled }) => {
  // const { className, index, style, children, disabled } = props;
  const menuItemContext = useContext(MenuContext);
  const classes = classNames('yolo-menu-item', className, {
    'is-disabled': disabled,
    'is-active': menuItemContext.index === index,
  });

  const handleClick = () => {
    const { index, onSelect } = menuItemContext;
    if (onSelect && !disabled && typeof index === 'string') {
      onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
