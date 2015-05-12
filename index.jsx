import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'randomList'

export default class RandomList extends Component {

  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  shuffle (array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  getRandomList () {
    // get the passed in props
    let cell = this.props.cell
    let cellProps = this.props.cellProps
    this.shuffle(cellProps)

    // we may need the position, to determine if people we just pressing the first one
    let key = 0

    const cellElement = cellProps.map((props)=>{
      // React needs key and we need the position, but props.key is invisible to the subcomponent
      props.key = key
      props.position = key
      key++
      return React.createElement(cell, props)
    }, this)

    return cellElement
  }

  render () {
    return (
      <div className={namespace}>
        {this.getRandomList.call(this)}
      </div>
      )
  }
}

RandomList.propTypes = {
  cell: PropTypes.func.isRequired
  , cellProps: PropTypes.array.isRequired
}
