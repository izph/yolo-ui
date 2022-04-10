import React from 'react';

export type AlertType = 'info' | 'success' | 'error' | 'warning';

export interface AlertProps {
  message: string;
  description?: string;
  /**
   * Set this to change alert type
   * @default info
   */
  type?: AlertType;
  closable?: boolean;
  className?: string;
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
