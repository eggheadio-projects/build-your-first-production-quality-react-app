import React, {Component} from 'react'
import PropTypes from 'prop-types'


export class Link extends Component {
  handleClick = (evt) => {
    evt.preventDefault()
    Window.history.pushState(null, '', this.props.to)
  }

  render() {
    return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}
