import React, { useState } from 'react';
import classNames from 'classnames';
import { MenuProps } from './interface';
import MenuContext, { MenuContextProps } from './MenuContext';

const Menu: React.FC<MenuProps> = (props) => {
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

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>{children}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;
