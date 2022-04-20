import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './interface';
import MenuContext from './MenuContext';

/* 
  index: 来源父组件生成 | 用户自定义
  children: 用户自定义的 <MenuItem>{ children内容 }</MenuItem>
*/
const MenuItem: FC<MenuItemProps> = ({ className, index, style, children, disabled }) => {
  // const { className, index, style, children, disabled } = props;
  const menuItemContext = useContext(MenuContext);
  const classes = classNames('yolo-menu-item', className, {
    'is-disabled': disabled,
    'is-active': menuItemContext.index === index,
  });

  /* 点击MenuItem触发 */
  const handleClick = () => {
    const { onSelect } = menuItemContext;
    if (onSelect && !disabled && typeof index === 'string') {
      /* 
        父组件传递的function，修改当前active的index，并执行用户自定义回调
      */
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
