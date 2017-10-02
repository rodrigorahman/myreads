import BaseComponent from "../../shared/BaseComponent";
import React from "react";
import PropTypes from 'prop-types';
import Book from "./Book";
import If from "../../shared/If";

class Bookcase extends BaseComponent {

    static propTypes = {
        callbackUpdateState: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
        history: PropTypes.object.isRequired
    };

    state = {};

    status = [
        {name: 'Currently Reading', status: 'currentlyReading'},
        {name: 'Want to Read', status: 'wantToRead'},
        {name: 'Read', status: 'read'}
    ];

    componentWillMount() {
    }

    render() {

        let {books, filterByCategory} = this.props;

        return (
            <div className="list-books-content">
                <div>
                    {this.status.map((s) => (
                        <div className="bookshelf" key={s.status}>
                            <If test={filterByCategory === true}>
                                <h2 className="bookshelf-title">{s.name}</h2>
                            </If>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books
                                        .filter((b) => b.status === s.status)
                                        .map((b) => (
                                                <li key={b.id}>
                                                    <Book
                                                        callbackUpdateState={this.props.callbackUpdateState}
                                                        book={b}
                                                        multiSelection={true}
                                                        history={this.props.history}
                                                    />
                                                </li>
                                            )
                                        )
                                    }
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default Bookcase;