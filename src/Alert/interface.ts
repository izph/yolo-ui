export type Type = 'info' | 'success' | 'error' | 'warning';
export type TypeMap = Record<Type, string>;

export interface AlertProps {
  /**
   * Set this to change alert type
   * @default info
   */
  type?: 'info' | 'success' | 'error' | 'warning';
}
