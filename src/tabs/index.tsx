import React, { FC, FunctionComponentElement, MouseEvent, useState } from 'react';
import classNames from 'classnames';
import TabPane from './TabPane';
import { TabsProps, TabPaneProps } from './interface';
import './style/index';

const RootTab: FC<TabsProps> = ({ className, defaultActiveKey, type, onTabClick, children }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const navClass = classNames('yolo-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  });

  const handleClick = (e: MouseEvent, index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveKey(index);
      if (onTabClick) {
        onTabClick(index);
      }
    }
  };

  const renderNavLinks = () =>
    React.Children.map(children, (child, index) => {
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

  const renderContent = () =>
    React.Children.map(children, (child, index) => {
      if (index === activeKey) {
        return child;
      }
    });

  return (
    <div className={`yolo-tabs ${className}`}>
      <ul className={navClass}>{renderNavLinks()}</ul>
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
