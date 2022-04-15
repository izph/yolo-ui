import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { AlertProps } from './interface';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import Transition from '../transition/index';
import './style/index';

const Alert: FC<AlertProps> = ({ type, description, message, closable, onClose }) => {
  const [closed, setClosed] = useState(false);

  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setClosed(true);
    onClose && onClose(e);
  };

  const classes = classNames('yolo-alert', {
    [`yolo-alert-${type}`]: type,
  });

  return (
    <Transition in={!closed} timeout={300} animation="zoom-in-left">
      <div className={classes}>
        <span className={'yolo-alert-message'}>{message}</span>
        {description && <p className="yolo-alert-desc">{description}</p>}
        {closable && (
          <span className="yolo-alert-close" onClick={handleClose}>
            <CloseOutlined />
          </span>
        )}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  type: 'info',
  closable: false,
};

export default Alert;
