import React, { useState } from 'react';
import classNames from 'classnames';
import { SwitchProps } from './interface';

/**
 * switch
 * @param {checked} bool 是否被选中
 * @param {disabled} bool 是否被禁用
 * @param {onText} string 开启状态的文本
 * @param {offText} string 关闭状态的文本
 * @param {onChange} func 状态切换时的回调
 * @param {size} string Switch组件的尺寸大小
 * @param {theme} string 组件的颜色
 */
const Switch: React.FC<SwitchProps> = (props) => {
  const { size, checked, disabled, onText, offText, onChange, className, style, ...restProps } =
    props;
  /** 
   * 设置初始背景色
  */
  const defaultStyle = {
    ...style,
    backgroundColor: style?.backgroundColor || '#0099ff'
  }

  const [isChecked, setChecked] = useState<boolean>(!!checked);
  const classes = classNames('yolo-switch', className, {
    'yolo-switch-checked': !!isChecked,
    'yolo-switch-disabled': disabled,
    [`yolo-switch-${size}`]: size,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onChange && onChange(!isChecked, e);
      setChecked(!isChecked);
    }
  };

  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick}
      style={defaultStyle}
      {...restProps}
    >
      <div className="yolo-switch-handle"></div>
      <span className="yolo-switch-inner">{isChecked ? onText : offText}</span>
    </button>
  );
};


export default Switch;
