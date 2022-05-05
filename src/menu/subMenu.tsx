import React, { useContext, useState, FunctionComponentElement } from 'react';
import classNames from 'classnames';
import { SubMenuProps, MenuItemProps } from './interface';
import MenuContext from './menuContext';
import Icon from '../icon/index';
import Transition from '../transition/index';

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, style, children } = props;
  const subMenuContext = useContext(MenuContext);
  const { mode, defaultOpenKeys } = subMenuContext;
  const openedSubMenus = defaultOpenKeys as Array<string>;
  /* 
    垂直才有下拉菜单
  */
  const isOpend = index && mode === 'vertical' ? openedSubMenus.includes(index) : false;
  /* 
    是否展开 菜单项
  */
  const [menuOpen, setOpen] = useState(isOpend);

  const classes = classNames('yolo-menu-item yolo-submenu-item', className, {
    'is-active': subMenuContext.index === index,
    'is-opened': menuOpen,
    'is-vertical': mode === 'vertical',
  });

  /* 
    处理点击事件
  */
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  /* 
    是垂直菜单才添加点击事件
  */
  const clickEvents = mode === 'vertical' ? { onClick: handleClick } : {};

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };

  const handleEvents =
    mode !== 'vertical'
      ? {
        onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
        onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
      }
      : {};

  /* 
     renderChildren: 和父组件类似的做法
     subMenu里面的 MenuItem的index是 '1-1' or '1-2' ...
  */
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
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };

  return (
    <li key={index} style={style} className={classes} {...handleEvents}>
      <div className="yolo-submenu-item" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
