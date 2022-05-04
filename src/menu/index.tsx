import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { MenuProps, MenuItemProps, MenuContextProps, SubMenuProps } from './interface';
import MenuContext from './menuContext';
import MenuItem from './menuItem';
import SubMenu from './subMenu';
import './style/index';

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

  /* 菜单栏点击事件 */
  const handleClick = (index: string) => {
    /* 设置当前active菜单 */
    setCurrentSelectedKey(index);
    if (typeof onSelect === 'function') {
      /* 执行用户自定义回调 */
      onSelect(index);
    }
  };

  /* 使用Context传递数据 */
  const passedContext: MenuContextProps = {
    /* 记录active菜单的index */
    index: currentSelectedKey || '0',
    /* 传递点击事件，修改父组件的state */
    onSelect: handleClick,
    /* 水平 or 垂直 */
    mode,
    /* subMenu默认展开哪一项 */
    defaultOpenKeys,
  };

  /* 
    props.children传入的内容对于我们来说是不可知的，如果我们没有对props.children进行操作，
    那其实没什么所谓。如果我们要对props.children进行操作，那就可以使用React.Children
    其实React.Children恰好就是为我们提供处理props.children数据结构能力的API。
    注意这里React.Children的Children是大写。
    React.Children.map(prop.children, (child, index) => {})
    第二个参数是遍历的元素上下文，通过它，我们能够进行定制化的操作。
    当props.children为null和undefined时，最终会原值返回
  */
  const renderChildren = () =>
    React.Children.map(children, (child, index) => {
      /* 
        child 是 ReactNode 类型，先断言成 FunctionComponentElement 类型，再拿到 displayName 内置属性
        FunctionComponentElement是函数组件元素，其实就是MenuItem
      */
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      /* 
        childElement:
          key,
          props: {children: '菜单i', index: 'i'}, 
          ref
          type: { displayName: 'MenuItem' | 'SubMenu' }
      */
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        /* 
          为每一个childElement添加唯一标识index属性，
          这样使用时则无需给 MenuItem 传入 index 属性
          最终返回一个 childElement[] 数组
        */

        /* 
          React.cloneElement则是能让我们在操作React element时，进行浅层的新props merge，
          传入的新children则会替换旧的children。原element的key和ref都会保留。
          React.cloneElement(element, [props], [...children])
        */
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
  /* 默认水平 */
  mode: 'horizontal',
  defaultOpenKeys: [],
};

/* 联合类型*/
export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};

const Menu = RootMenu as IMenuComponent;
/* 
  挂载Item、SubMenu
*/
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
