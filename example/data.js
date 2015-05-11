import React, {PropTypes, Component} from 'react'

class Name extends Component{
  render () {
    return <div>{this.state.position} : {this.props.name}</div>
  }
}

Name.propTypes = {
    name: PropTypes.string.isRequired
  }

export default {
  cellProps: [
    {
      name: 'Supplier One'
    }
  , {
    name: 'Supplier Two'
  }
  , {
    name: 'Supplier Three'
  }
  , {
    name: 'Supplier Four'
  }
  , {
    name: 'Supplier Five'
  }
  , {
    name: 'Supplier Six'
  }
  , {
    name: 'Supplier Seven'
  }
  , {
    name: 'Supplier Eight'
  }

  ]
  , cell: Name
}

