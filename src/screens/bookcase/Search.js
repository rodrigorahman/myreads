import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../../BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'

import Progress from 'react-progress-2'
import BookModel from '../../domain/BookModel'

class Search extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    callbackUpdateState: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    booksFound: [],
    message: ''
  }

  addBook = (book) => {
    this.props.books.push(book)
    this.props.history.push('/')
  }

  findBooks = (e) => {

    const term = e.target.value

    if (term) {
      Progress.show()
      search(term, 1000)
        .then((data) => {
          let booksFound = []
          console.log(data.error)
          if (!data.error) {

            booksFound = data.map((bf) => {
              const book = this.props.books.find((b) => b.id === bf.id)
              let status = book ? book.status : 'none'
              let authors = bf.authors || []
              let smallImage = (bf.imageLinks ? bf.imageLinks.smallThumbnail : '')

              return new BookModel(
                bf.id,
                smallImage,
                128,
                193,
                bf.title,
                authors,
                status,
                false
              )
            })
            this.setState({ message: '' })
          } else {
            booksFound = []
            this.setState({ message: 'Search did not return result' })
          }

          this.setState({ booksFound })

          Progress.hide()

        }).catch(e => {
        Progress.hide()
        console.error(e)
      })
    }

  }

  render () {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input id='txt_term_search' type="text" placeholder="Search by title or author"
                   onChange={ this.findBooks }/>
          </div>
          <Progress.Component/>
        </div>
        <div className="search-books-results">
          <h1>{ this.state.message }</h1>
          <ol className="books-grid">
            {

              this.state.booksFound.map((b) => (
                <li key={ b.id }>
                  <Book
                    callbackUpdateState={ this.props.callbackUpdateState }
                    book={ b }
                    onAddBooking={ this.addBook }
                    multiSelection={ false }
                    history={ this.props.history }
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search