import React from 'react';
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
  const { color, size, checked, disabled, onText, offText, onChange, onClick, className } = props;
  const classes = classNames('yolo-switch', className);
  return <div className={classes}></div>;
};

Switch.defaultProps = {};

export default Switch;
