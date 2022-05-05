import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { InputProps } from './interface';

/* 
  React.forwardRef字面意思理解为转发Ref，它会创建一个React组件，这个组件能够将
  其接受的 ref 属性转发到其组件树下的另一个组件中，转发refs到DOM组件
  （ref不像props作为参数可以传递，所以要想传递ref得用forwardRef）
*/
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
