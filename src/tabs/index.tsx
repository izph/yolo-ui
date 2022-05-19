import React, { FC, FunctionComponentElement, MouseEvent, useState } from 'react';
import classNames from 'classnames';
import TabPane from './tabPane';
import { TabsProps, TabPaneProps } from './interface';

const RootTab: FC<TabsProps> = ({
  className,
  defaultActiveKey,
  type,
  onTabClick,
  children,
  ...restProps
}) => {
  /** 
   * 当前选择的tabs页签key值
  */
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const tabsClassName = classNames('yolo-tabs', {
    [`${className}`]: className
  })
  const classes = classNames('yolo-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  });

  /** 
   * 点击切换tabs页签时的回调
  */
  const handleClick = (e: MouseEvent, index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveKey(index);
      onTabClick && onTabClick(index);
    }
  };

  /** 
   * 点击切换tabs页签时的回调
  */
  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabPaneProps>;
      const { tab, disabled } = childElement.props;
      const classes = classNames('yolo-tabs-nav-item', {
        'is-active': activeKey === index,
        disabled,
      });

      return (
        <li
          className={classes}
          /* eslint-disable-next-line react/no-array-index-key */
          key={`nav-item-${index}`}
          onClick={(e) => {
            handleClick(e, index, disabled);
          }}
        >
          {tab}
        </li>
      );
    });
  }

  /** 
   * 根据activeKey获取对应的内容
  */
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeKey) {
        return child;
      }
    });
  }

  return (
    <div className={tabsClassName} {...restProps}>
      {/* tabs的导航栏 */}
      <ul className={classes}>{renderNavLinks()}</ul>
      {/* tabs的内容区域 */}
      <div className="yolo-tabs-content">{renderContent()}</div>
    </div>
  );
};

RootTab.defaultProps = {
  defaultActiveKey: 0,
  type: 'line',
};

export type ITabComponent = FC<TabsProps> & {
  TabPane: FC<TabPaneProps>;
};

const Tabs = RootTab as ITabComponent;
Tabs.TabPane = TabPane;

export default Tabs;
