import React from 'react'
import './App.css'
import "react-progress-2/main.css"

import Search from "./screens/bookcase/Search";
import Header from "./screens/header/Header";
import Bookcase from "./screens/bookcase/Bookcase";
import FloatButton from "./shared/FloatButton";
import { Route } from "react-router-dom";


class BooksApp extends React.Component {

    state = {
        books: [],
    };

    callbackUpdateState = () => {
        const books = this.state.books.filter((b) => b.status !== 'none');
        this.setState({books});
        this.saveBooksInLocalstorage();
    };

    saveBooksInLocalstorage = () => {
        localStorage.books = JSON.stringify(this.state.books);
    };


    readBooksLocalStorage = () => {
        let booksLocal = localStorage.books;
        let books = [];

        if (booksLocal) {
            books = JSON.parse(booksLocal);
        }

        return books;
    };

    componentWillMount() {
        this.setState({books: this.readBooksLocalStorage()});
    }

    render() {
        return (
            <div className="app">
                <Route
                    exact
                    path='/search'
                    render={({history}) => (
                        <Search
                            books={this.state.books}
                            callbackUpdateState={this.callbackUpdateState}
                            history={history}
                        />
                    )}
                />

                <Route
                    exact
                    path='/'
                    render={({history}) => (

                        <div className="list-books">

                            <Header
                                books={this.state.books}
                                callbackUpdateState={this.callbackUpdateState}/>

                            <Bookcase
                                books={this.state.books}
                                callbackUpdateState={this.callbackUpdateState}
                                filterByCategory={true}
                                history={history}
                            />

                            <FloatButton onClick={() => history.push('/search')}/>
                        </div>
                    )}
                />

            </div>
        )
    }
}

export default BooksApp