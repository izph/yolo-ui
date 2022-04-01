import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './interface';
import MenuContext from './MenuContext';

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, index, style, children, disabled } = props;
  const menuItemContext = useContext(MenuContext);
  const classes = classNames('yolo-menu-item', className, {
    'is-disabled': disabled,
    'is-active': menuItemContext.index === index,
  });

  const handleClick = () => {
    const { index, onSelect } = menuItemContext;
    if (onSelect && !disabled) {
      onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
