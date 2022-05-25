/** 卡片和线 */
export type TabsType = 'line' | 'card';

export interface TabsProps {
  className?: string;
  /** 默认显示的tab页 */
  defaultActiveKey?: number;
  type?: TabsType;
  /** 点击tab页时的回调 */
  onTabClick?: (selectedKey: number) => void;
}

export interface TabPaneProps {
  tab: React.ReactNode;
  /** 禁止点击 */
  disabled?: boolean;
}
