import React from 'react';

import { mount } from 'enzyme';
import Header from "../Header";

let books = [
    {
        id: 1,
        thumbnail: '',
        width: 128,
        height: 193,
        title: '',
        authors: ['autor 1'],
        status: 'none',
        selected: false
    },
    {
        id: 1,
        thumbnail: '',
        width: 128,
        height: 193,
        title: '',
        authors: ['autor 1'],
        status: 'none',
        selected: false
    }
];

it('renders without crashing', () => {
    let callbackFunc = jest.fn();
    const component = mount(<Header books={books} callbackUpdateState={callbackFunc}/>);
    component.find('#sel_status').simulate('change');

    expect(callbackFunc).toHaveBeenCalledTimes(1);
});

it('change multiples statues together', () => {
    let callbackFunc = jest.fn();
    books.forEach(b => b.selected = true);
    const component = mount(<Header books={books} callbackUpdateState={callbackFunc}/>);
    component.find('#sel_status').simulate('change');

    expect(callbackFunc).toHaveBeenCalledTimes(1);
});