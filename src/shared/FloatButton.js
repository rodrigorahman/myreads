import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class FloatButton extends PureComponent {

  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className="open-search">
        <a id='addBook' onClick={ this.props.onClick }>Add a book</a>
      </div>
    )
  }
}

export default FloatButton