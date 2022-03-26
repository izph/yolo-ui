import React from 'react';
import propTypes from 'prop-types';

import { AlertProps, TypeMap } from './interface';
import './style';

const prefixClass = 'yolo-alert';

const types: TypeMap = {
  info: '#5352ED',
  success: '#2ED573',
  error: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, type = 'info', ...rest }) => (
  <div
    className={prefixClass}
    style={{
      background: types[type],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  type: propTypes.oneOf(['info', 'success', 'error', 'warning']),
};

export default Alert;
