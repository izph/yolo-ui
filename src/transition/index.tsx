import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionProps } from './interface';

const Transition: FC<TransitionProps> = ({
  classNames,
  animation,
  wrapper, // 方法被包裹元素设置了transition属性冲突，在外层加div不覆盖
  children,
  ...restProps
}) => {
  /** 
   * timeout 属性可以指定对应值的动画时间  timeout={{ enter: 300, exit: 500}}
  */
  return (
    <CSSTransition classNames={classNames || animation} {...restProps}>
      {wrapper ? <div>children</div> : children}
    </CSSTransition>
  );
}

/** 
 *  unmountOnExit | 在元素退场时，自动把DOM也删除
 *  appear | 意思是想让组件出现时就有动画效果
*/
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
  wrapper: false,
};

export default Transition;
