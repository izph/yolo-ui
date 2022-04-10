import React, { FC } from 'react';
import { TabPaneProps } from './interface';

const TabPane: FC<TabPaneProps> = ({ children }) => (
  <div className="yolo-tab-panel">{children}</div>
);

export default TabPane;
