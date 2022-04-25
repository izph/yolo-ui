export type TabsType = 'line' | 'card';

export interface TabsProps {
  className?: string;
  /** 默认显示的tab页 */
  defaultActiveKey?: number;
  type?: TabsType;
  onTabClick?: (selectedKey: number) => void;
}

export interface TabPaneProps {
  tab: React.ReactNode;
  disabled?: boolean;
}
