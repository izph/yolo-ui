export type TabsType = 'line' | 'card';

export interface TabsProps {
  className?: string;
  defaultActiveKey?: number;
  type?: TabsType;
  onTabClick?: (selectedKey: number) => void;
}

export interface TabPaneProps {
  tab: React.ReactNode;
  disabled?: boolean;
}
