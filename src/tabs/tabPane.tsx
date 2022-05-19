import React, { FC } from 'react';
import { TabPaneProps } from './interface';

const TabPane: FC<TabPaneProps> = ({ children }) => (
  <div className="yolo-tab-pane">{children}</div>
);

export default TabPane;
