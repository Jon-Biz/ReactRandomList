import React from 'react'
import RandomList from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<RandomList {...data} />, document.getElementById('app'))
