import React, {Component} from 'react';
import PropTypes from 'prop-types';


class FloatButton extends Component {

    static propTypes = {
        onClickFn: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="open-search">
                <a id='addBook' onClick={() => this.props.onClickFn()}>Add a book</a>
            </div>
        )
    }
}

export default FloatButton;

