import React from 'react';

import {mount, shallow} from 'enzyme';
import Bookcase from "../Bookcase";
import BookModel from "../../../domain/BookModel";

it('render without crashing', () => {

    const callbackUpdateState = jest.fn();
    let books = [new BookModel(1,'', 128, 193, '',['author 1'], 'none',false)];

    let filterByCategory = true

    expect(shallow(
        <Bookcase
            callbackUpdateState={callbackUpdateState}
            books={books}
            filterByCategory={filterByCategory}
        />
    ));
});


it('render without crashing and no filter by category', () => {

    const callbackUpdateState = jest.fn();
    let books = [new BookModel(1,'', 128, 193, '',['author 1'], 'none',false)];
    let filterByCategory = false

    expect(shallow(
        <Bookcase
            callbackUpdateState={callbackUpdateState}
            books={books}
            filterByCategory={filterByCategory}
        />
    ));
});

