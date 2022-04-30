import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from './interface';
import './style/index';

const Icon: React.FC<IconProps> = (props) => {
  // icon-primary
  const { className, theme, icon, ...restProps } = props;
  const classes = classNames('yolo-icon', className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon icon={icon} className={classes} {...restProps} />;
};

export default Icon;
