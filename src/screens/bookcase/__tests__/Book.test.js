import React from 'react';

import { mount, shallow } from 'enzyme';
import Book from "../Book";
import BookModel from "../../../domain/BookModel";

const history = {
    push: () => {}
}

it('renders without crashing with multiSelection', () => {

    let book = new BookModel(1, '', 128, 193, '', ['autor 1'], 'none', false);

    let callbackUpdateState = jest.fn();
    let onAddBooking = jest.fn();
    let multiSelection = true;

    expect(shallow(<Book
        book={book}
        callbackUpdateState={callbackUpdateState}
        onAddBooking={onAddBooking}
        multiSelection={multiSelection}
        history={history}
    />)).toMatchSnapshot();
});

it('change bookstatus with multiSelection and book selected', () => {
    let book = {
        id: 1,
        thumbnail: '',
        width: 128,
        height: 193,
        title: '',
        authors: ['author 1'],
        status: 'none',
        selected: true
    };
    let callbackUpdateState = jest.fn();
    let onAddBooking = jest.fn();
    let multiSelection = true;


    let bookComponent = mount(<Book
        book={book}
        callbackUpdateState={callbackUpdateState}
        onAddBooking={onAddBooking}
        multiSelection={multiSelection}
        history={history}
    />).find('#sel_change_book').simulate('change');

    expect(callbackUpdateState).toHaveBeenCalledTimes(1);

});

it('change bookstatus without multiSelection', () => {

    let book = new BookModel(1,'', 128, 193, '',['author 1'], 'none',true);

    let callbackUpdateState = jest.fn();
    let onAddBooking = jest.fn();
    let multiSelection = true;


    let bookComponent = mount(<Book
        book={book}
        callbackUpdateState={callbackUpdateState}
        onAddBooking={onAddBooking}
        multiSelection={multiSelection}
        history={history}
    />).find('#img_book').simulate('doubleClick');

    expect(callbackUpdateState).toHaveBeenCalledTimes(1);
});

it('double click in image book with selected = false and multiselection=true', () => {
    let book = new BookModel(1,'', 128, 193, '',['author 1'], 'none', false);
    let callbackUpdateState = jest.fn();
    let onAddBooking = jest.fn();
    let multiSelection = true;


    let bookComponent = mount(<Book
        book={book}
        callbackUpdateState={callbackUpdateState}
        onAddBooking={onAddBooking}
        multiSelection={multiSelection}
        history={history}
    />).find('#img_book').simulate('doubleClick');

    expect(callbackUpdateState).toHaveBeenCalledTimes(1);
});