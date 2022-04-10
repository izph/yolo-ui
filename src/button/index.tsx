import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './interface';

import './style/index';

const Button: React.FC<ButtonProps> = (props) => {
  // className用户自定义的
  const { type, className, disabled, size, children, href, ...restProps } = props;

  // yolo-btn yolo-btn-lg yolo-btn-primary
  // 因为我们的key是变化的，所有用[`${ }`]
  const classes = classNames('yolo-btn', className, {
    [`yolo-btn-${type}`]: type,
    [`yolo-btn-${size}`]: size,
    disabled: type === 'link' && disabled,
  });

  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
};

export default Button;
