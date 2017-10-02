import React from 'react';

import { shallow, mount } from 'enzyme';
import If from "../If";

it('rendered correctly', () => {
    const test = (
        <If test={true}>
            <span>Olá teste</span>
        </If>
    );

    let component = mount(test);
    expect(component.find('span')).toHaveLength(1);
});

it('rendered correctly without children', () => {
    const test = (
        <If test={false}>
            <span>Olá teste</span>
        </If>
    );

    let component = mount(test);
    expect(component.find('span')).toHaveLength(0);
});


it('rendered correctly without test ', () => {
    const test = (
        <If >
            <span>Olá teste</span>
        </If>
    );

    let component = mount(test);
    expect(component.find('span')).toHaveLength(0);
});