import React, { useState } from 'react';
import classNames from 'classnames';
import { SwitchProps } from './interface';
import './style/index';

/**
 * switch
 * @param {onClick} func 对外暴露的点击事件
 * @param {checked} bool 是否被选中
 * @param {disabled} bool 是否被禁用
 * @param {onText} string 开启状态的文本
 * @param {offText} string 关闭状态的文本
 * @param {onChange} func 状态切换时的文本
 * @param {size} string 组件的尺寸
 */
const Switch: React.FC<SwitchProps> = (props) => {
  const {
    color = '#09f',
    size,
    defaultChecked,
    disabled,
    onText,
    offText,
    onChange,
    onClick,
    className,
  } = props;
  const [isChecked, setChecked] = useState(defaultChecked);
  const classes = classNames('yolo-switch', className, {
    'yolo-switch-checked': isChecked,
    'yolo-switch-disabled': disabled,
  });
  const handleClass = classNames('yolo-switch-handle', {
    [`yolo-switch-${size}`]: size,
    'is-disabled': disabled,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    onChange && onChange(e);
  };
  const handleClick = () => {
    if (!disabled) {
      setChecked(!isChecked);
    }
  };

  return (
    // <div className={classes}>
    //   <label className={handleClass} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
    //     <input type="checkbox" checked={checked} onChange={handleChange} />
    //     <span
    //       className="yolo-switch-inner"
    //       style={{ backgroundColor: color }}
    //       data-onText={onText}
    //     ></span>
    //     <span className="offText">{offText}</span>
    //   </label>
    // </div>

    <button type="button" className={classes} onClick={handleClick}>
      <div className="yolo-switch-handle"></div>
    </button>
  );
};

Switch.defaultProps = {
  size: 'md',
};

export default Switch;
