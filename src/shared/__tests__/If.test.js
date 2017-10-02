import React from 'react';

import {shallow} from 'enzyme';
import If from "../If";

it('rendered correctly', () => {

    const test = (
        <If test={true}>
            <span>Olá teste</span>
        </If>
    );

    expect(shallow(test)).toMatchSnapshot();
});

it('rendered correctly without children', () => {

    const test = (
        <If test={false}>
            <span>Olá teste</span>
        </If>
    );

    expect(shallow(test)).toMatchSnapshot();

});
