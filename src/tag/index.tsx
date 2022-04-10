import React, { FC, useState } from 'react';
import classNames from 'classnames';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import Transition from '../transition';
import { TagProps } from './interface';
import './style/index';

export const Tag: FC<TagProps> = (props) => {
  const [hide, setHide] = useState<boolean>(false);
  const { className, color, size, text, onClose, closable, ...restProps } = props;
  const classes = classNames('yolo-tag', className, {
    [`tag-${color}`]: color,
    [`tag-${size}`]: size,
  });
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };
  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-left">
      <div className={classes} {...restProps}>
        <span className="tag-text">{text}</span>
        {closable && <CloseOutlined className="tag-close-icon" onClick={handleClose} />}
      </div>
    </Transition>
  );
};

Tag.defaultProps = {
  color: 'primary',
  closable: false,
};

export default Tag;
