import React, { FC } from 'react';
import { ProgressProps } from './interface';

/* 
  percent: number 百分比
  strokeHeight: number 高度
  showText: boolean 是否显示百分比数字
  theme: string 进度条主题色
  style: React.CSSProperties 用户自定义样式
*/
const Progress: FC<ProgressProps> = ({
  percent,
  strokeHeight,
  showText,
  style,
  theme,
  ...restProps
}) => {
  return (
    <div className="yolo-progress" style={style} {...restProps}>
      {/* 灰色最外层 */}
      <div className="yolo-progress-outer" style={{ height: `${strokeHeight}px` }}>
        <div className={`yolo-progress-inner color-${theme}`} style={{ width: `${percent}%` }}>
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

/* 
  初始化默认值
*/
Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
};

export default Progress;
