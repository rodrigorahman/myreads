import React from 'react'

import { mount, shallow } from 'enzyme'
import Search from '../Search'
import { BrowserRouter } from 'react-router-dom'
import BookModel from '../../../domain/BookModel'

it('renders without crashing ', () => {

  let books = [new BookModel(1, '', 128, 193, '', ['author 1'], 'none', false)]
  let callbackUpdateState = jest.fn()

  expect(shallow(<Search
    books={ books }
    callbackUpdateState={ callbackUpdateState }
  />)).toMatchSnapshot()
})

it('test with find books', () => {

  let searchResult = [{
    'title': 'Best Android Apps',
    'subtitle': 'The Guide for Discriminating Downloaders',
    'authors': [
      'Mike Hendrickson',
      'Brian Sawyer'
    ],
    'publisher': '"O\'Reilly Media, Inc."',
    'publishedDate': '2010-04-27',
    'description': 'Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.',
    'industryIdentifiers': [
      {
        'type': 'ISBN_13',
        'identifier': '9781449382551'
      },
      {
        'type': 'ISBN_10',
        'identifier': '144938255X'
      }
    ],
    'readingModes': {
      'text': false,
      'image': false
    },
    'pageCount': 240,
    'printType': 'BOOK',
    'categories': [
      'Computers'
    ],
    'averageRating': 4,
    'ratingsCount': 3,
    'maturityRating': 'NOT_MATURE',
    'allowAnonLogging': false,
    'contentVersion': 'preview-1.0.0',
    'imageLinks': {
      'smallThumbnail': 'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      'thumbnail': 'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    },
    'language': 'en',
    'previewLink': 'http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api',
    'infoLink': 'http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api',
    'canonicalVolumeLink': 'https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ',
    'id': 'bUybAgAAQBAJ'
  }]

  global.fetch = jest.fn(() => new Promise(resolve => resolve({
    json: () => { return { books: searchResult }}
  })))

  let books = [new BookModel(1, '', 128, 193, '', ['author 1'], 'none', false)]
  let callbackUpdateState = jest.fn()

  let component = mount(
    <BrowserRouter>
      <Search
        books={ books }
        callbackUpdateState={ callbackUpdateState }
      />
    </BrowserRouter>
  )

  let f2 = component.find('#txt_term_search')
  f2.simulate('change', { target: { value: 'a' } })

})

it('test with find books with error', () => {

  global.fetch = jest.fn(() => new Promise(reject => {throw new Error('Oooops!')}))

  let books = [new BookModel(1, '', 128, 193, '', ['author 1'], 'none', false)]
  let callbackUpdateState = jest.fn()

  let component = mount(
    <BrowserRouter>
      <Search
        books={ books }
        callbackUpdateState={ callbackUpdateState }
      />
    </BrowserRouter>
  )

  let f2 = component.find('#txt_term_search')
  f2.simulate('change', { target: { value: 'a' } })

})

it('test with find books and return data.error', () => {

  global.fetch = jest.fn(() => new Promise(resolve => resolve(
    {
      json: () => {
        return {
          books: {
            error: 'empty result'
          }
        }
      }
    })))

  let books = []
  let callbackUpdateState = jest.fn()

  let component = mount(
    <BrowserRouter>
      <Search
        books={ books }
        callbackUpdateState={ callbackUpdateState }
      />
    </BrowserRouter>
  )

  let f2 = component.find('#txt_term_search')
  f2.simulate('change', { target: { value: 'a' } })
})
