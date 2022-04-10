import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { CheckOutlined } from '@ant-design/icons';
import { SelectContext } from './selectContext';
import { SelectOptionProps } from './interface';
import './style/index';
export const Option: FC<SelectOptionProps> = ({ value, label, disabled, children, index }) => {
  const { onSelect, selectedValues, multiple } = useContext(SelectContext);
  const isSelected = selectedValues.includes(value);
  const classes = classNames('yolo-select-item', {
    'is-disabled': disabled,
    'is-selected': isSelected,
  });
  // eslint-disable-next-line no-shadow
  const handleClick = (e: React.MouseEvent, value: string, isSelected: boolean) => {
    e.preventDefault();
    if (onSelect && !disabled) {
      onSelect(value, isSelected);
    }
  };

  return (
    <li
      key={index}
      className={classes}
      onClick={(e) => {
        handleClick(e, value, isSelected);
      }}
    >
      {children || label || value}
      {multiple && isSelected && <CheckOutlined />}
    </li>
  );
};

Option.displayName = 'Option';

export default Option;
