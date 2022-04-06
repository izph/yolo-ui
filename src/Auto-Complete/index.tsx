import React, { FC, KeyboardEvent, ChangeEvent, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';
import Transition from '../Transition/index';
import Input from '../Input/index';
import { AutoCompleteProps, DataSourceType } from './interface';
import useDebounce from '../hooks/useDebounce';
import useClickOutside from '../hooks/useClickOutside';

import './style/index';

const AutoComplete: FC<AutoCompleteProps> = ({
  value = '',
  onSearch,
  onSelect,
  renderOption,
  ...restProps
}) => {
  // 用户输入的value
  const [inputValue, setInputValue] = useState(value as string);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // 数据
  const [options, setOptions] = useState<DataSourceType[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const triggerSearch = useRef(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debouncedValue = useDebounce(inputValue, 300);

  // 当点击到AutoComplete组件外的区域，会自动关闭下拉框选项部分
  useClickOutside(dropdownRef, () => {
    setOptions([]);
    setShowDropdown(false);
  });

  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      setOptions([]);
      const result = onSearch(debouncedValue);
      if (result instanceof Promise) {
        setIsLoading(true);
        result.then((data) => {
          setIsLoading(false);
          setOptions(data);
          if (data.length > 0) {
            setShowDropdown(true);
          }
        });
      } else {
        setOptions(result);
        if (result.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
    }
    setHighlightIndex(-1);
  }, [debouncedValue, onSearch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim(); // 去掉空格
    setInputValue(newValue);
    triggerSearch.current = true;
  };
  // 点击item触发
  const handleSelect = (item: DataSourceType) => {
    // 把item填充，清空下拉菜单
    setInputValue(item.value);
    setShowDropdown(false);
    if (onSelect) {
      onSelect(item);
    }
    triggerSearch.current = false;
  };

  // eslint-disable-next-line no-confusing-arrow
  const renderTemplate = (item: DataSourceType) => (renderOption ? renderOption(item) : item.value);

  const highlight = (index: number) => {
    let currentIndex = index;
    if (index < 0) currentIndex = 0;
    if (index >= options.length) {
      currentIndex = options.length - 1;
    }
    setHighlightIndex(currentIndex);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      // 回车
      case 'Enter':
        if (options[highlightIndex]) {
          handleSelect(options[highlightIndex]);
        }
        break;
      // 上
      case 'ArrowUp':
        highlight(highlightIndex - 1);
        break;
      // 下
      case 'ArrowDown':
        highlight(highlightIndex + 1);
        break;
      // ESC
      case 'Escape':
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  //
  const generateDropdown = () => (
    <Transition in={showDropdown || isLoading} animation="zoom-in-top" timeout={300}>
      <ul className="yolo-suggestion-list">
        {isLoading && (
          <div className="suggestion-loading-icon">
            <LoadingOutlined />
          </div>
        )}
        {options.map((item, index) => {
          const classes = classNames('suggestion-item', {
            'is-active': index === highlightIndex, // 结合highlightIndex，做高亮处理
          });
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className={classes} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    </Transition>
  );

  return (
    <div className="yolo-auto-complete" ref={dropdownRef}>
      <Input value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} {...restProps} />
      {generateDropdown()}
    </div>
  );
};
export default AutoComplete;
