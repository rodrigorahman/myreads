import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        callbackUpdateState: PropTypes.func.isRequired
    };

    onChangeStatusForAllBooks = (e) => {

        const status = e.target.value;

        this.props.books
            .filter(b => b.selected === true)
            .forEach((b) => {
                b.status = status
                b.selected = false;
            });
        this.props.callbackUpdateState();
    };

    render() {
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                    <h2>Press Double click in book for selection and will you be able change status for all
                        books</h2>
                </div>
                <div className="list-books-title-status"
                     style={this.props.books.filter((b) => b.selected === true).length > 1 ? {display: 'block'} : {display: 'none'}}>
                    <h1>Change {this.props.books.filter((b) => b.selected === true).length} books for:</h1>
                    <select id='sel_status' defaultValue='none' onChange={this.onChangeStatusForAllBooks}>
                        <option value="nones" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        );
    }
};
export default Header;