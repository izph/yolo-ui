import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

// test("button test case", function () {
//     const button = render(<Button>Test</Button>);
//     const element = button.queryByText('Test');
//     expect(element).toBeTruthy();
//     // 组件是否在文档中
//     expect(element).toBeInTheDocument();
// })

// describe将测试用例分类   it和test是一样的
describe('test Button Component', function () {
  // 测试不同类型的button
  it('should render Buttons of different type correctly', () => {
    const wrapper = render(
      <div>
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="info">info</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="dashed">dashed</Button>
        <Button type="link">text</Button>
      </div>,
    );
    //生成 __snapshots__
    expect(wrapper).toMatchSnapshot();
  });

  // 单独测试link
  it('should render a link when btnType equals link and href is provided', () => {
    // const wrapper = shallow(
    //     <Button type="link" href="https://github.com/Jacky-Summer">
    //         Link
    //     </Button>,
    // )
    // const element = wrapper.first()
    // expect(element.name()).toEqual('a')
    // expect(element.hasClass('mk-btn mk-btn-link'))
  });

  // 测试不同大小的button
  it('should render Buttons of different size correctly', () => {
    const wrapper = render(
      <div>
        <Button type="primary" size="lg">
          lg尺寸
        </Button>
        <Button type="primary" size="md">
          md尺寸
        </Button>
        <Button type="primary" size="sm">
          sm尺寸
        </Button>
      </div>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render disabled button when disabled set to true', () => {
    // const wrapper = shallow(<Button disabled>Disabled Button</Button>)
    // const element = wrapper.find('button')
    // expect(element.prop('disabled')).toBeTruthy()
    // element.simulate('click')
    // expect(disabledProps.onClick).not.toHaveBeenCalled()
  });

  it('should not render as link button when href is undefined', async () => {
    // const wrapper = shallow(
    //     <Button type="link" href={undefined}>
    //         button
    //     </Button>,
    // )
    // expect(wrapper.find('a').exists()).toBeFalsy()
    // expect(wrapper.find('button').exists()).toBeTruthy()
  });
});
