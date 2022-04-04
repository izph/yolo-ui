import React, { useContext, useState, FunctionComponentElement } from 'react';
import classNames from 'classnames';
// import { SubMenuProps, MenuItemProps } from './interface';
import { MenuItemProps } from './MenuItem';
import MenuContext from './MenuContext';

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  style: React.CSSProperties;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, style, children } = props;
  const subMenuContext = useContext(MenuContext);
  const { mode, defaultOpenKeys } = subMenuContext;
  const openedSubMenus = defaultOpenKeys as Array<string>;
  const isOpend = index && mode === 'vertical' ? openedSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpend);

  const classes = classNames('yolo-menu-item yolo-submenu-item', className, {
    'is-active': subMenuContext.index === index,
  });
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  const handleEvents =
    mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};

  const clickEvents = mode === 'vertical' ? { onClick: handleClick } : {};

  const renderChildren = () => {
    const subMenuClasses = classNames('yolo-submenu', {
      'menu-opened': menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      }
      // eslint-disable-next-line no-console
      console.error('Warning: SubMenu has a child which is not a MenuItem component');
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} style={style} className={classes} {...handleEvents}>
      <div className="yolo-submenu-item" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
