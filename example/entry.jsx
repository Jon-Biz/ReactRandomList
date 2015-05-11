import React from 'react'
import RandomList from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

class Name extends React.Component{
  render () {
    return <div>{this.props.name}</div>
  }
  propTypes() {
    name: PropTypes.string.isRequired
  }
}


React.render(<RandomList {...data} />, document.getElementById('app'))
