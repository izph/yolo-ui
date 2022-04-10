import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionProps } from './interface';

const Transition: FC<TransitionProps> = ({
  classNames,
  animation,
  wrapper, // 方法被包裹元素设置了transition属性冲突，在外层加div不覆盖
  children,
  ...restProps
}) => (
  <CSSTransition classNames={classNames || animation} {...restProps}>
    {wrapper ? <div>children</div> : children}
  </CSSTransition>
);

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
  wrapper: false,
};

export default Transition;
