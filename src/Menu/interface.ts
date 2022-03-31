// React.CSSProperties -> style

type MenuMode = 'vertical' | 'horizontal';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}
