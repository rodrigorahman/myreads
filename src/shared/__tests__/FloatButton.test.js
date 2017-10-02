import React from 'react';

import { mount, shallow } from 'enzyme';
import FloatButton from "../FloatButton";

it('renders without crashing', () => {
    expect(shallow(<FloatButton onClickFn={() => {}}/>)).toMatchSnapshot();
});

it('Invoke click', () => {
    const onClickFn = jest.fn();
    const test = mount(<FloatButton onClick={onClickFn}/>)

    test.find('#addBook').simulate('click');

    expect(onClickFn).toHaveBeenCalledTimes(1);
});