import React from 'react'
import App from './App'

import { shallow } from 'enzyme'
import 'core-js/es6/map'
import 'core-js/es6/set'

localStorage.books = JSON.stringify([{}])

it('renders without crashing', () => {
  expect(shallow(
    <App/>
  )).toMatchSnapshot()
})