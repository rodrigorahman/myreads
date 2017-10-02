import React, {Component} from 'react';
import PropTypes from'prop-types';

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        callbackUpdateState: PropTypes.func.isRequired,
        onAddBooking: PropTypes.func,
        multiSelection: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired
    };

    addBooking;

    state = {
        cssSelectionGroup: 'book-top-selection-hide'
    };

    bookSelectionHandler = () => {

        if(this.props.multiSelection){
            let cssSelectionGroup = 'book-top-selection';

            let book = this.props.book;

            if (book.selected) {
                cssSelectionGroup = 'book-top-selection-hide';
                book.selected = false;
            } else {
                book.selected = true;
            }

            this.setState({cssSelectionGroup});

            this.props.callbackUpdateState();

        }

    };

    changeOrAddBookcase = (e) => {

        let status = e.target.value;
        this.props.book.status = status;

        if(this.addBooking){
            this.addBooking(this.props.book);
        }
        this.props.callbackUpdateState();
        this.props.history.push('/')
    };

    componentWillMount() {
        this.addBooking = this.props.onAddBooking
    }


    render() {

        const {book} = this.props;
        const {thumbnail, width=128, height=193, title, authors, status} = book;

        return (
            <div className="book">
                <div className="book-top">
                    <div className={this.state.cssSelectionGroup}><input type='radio'></input></div>
                    <div id='img_book' className="book-cover" style={{
                            width: width,
                            height: height,
                            backgroundImage: 'url("'+ thumbnail +'")'
                        }} onDoubleClick={this.bookSelectionHandler}></div>
                    <div className="book-shelf-changer">
                        <select id='sel_change_book' defaultValue={status} onChange={this.changeOrAddBookcase}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">{authors.join(',')}</div>
            </div>
        )
    }
}

export default Book;