import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { InputProps } from './interface';
import './style/index';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // 取出各种属性值
  const { size, disabled, prefix, suffix, style, icon, ...restProps } = props;
  // 根据不同的属性计算不同的classname
  const classes = classNames('yolo-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prefix || suffix,
    'input-group-suffix': !!suffix,
    'input-group-prefix': !!prefix,
  });

  // 根据属性判断是否需要添加特定的节点
  return (
    <div className={classes} style={style}>
      {prefix && <div className="yolo-input-group-prefix">{prefix}</div>}
      {icon && <div className="icon-wrapper">{icon}</div>}
      <input ref={ref} className="yolo-input-inner" disabled={disabled} {...restProps} />
      {suffix && <div className="yolo-input-group-suffix">{suffix}</div>}
    </div>
  );
});

export default Input;
