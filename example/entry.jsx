import React from 'react'
import SupplierList from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<SupplierList {...data} />, document.getElementById('app'))
