import { ThemeProps } from '../Icon/index';
import React from 'react';

export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}
