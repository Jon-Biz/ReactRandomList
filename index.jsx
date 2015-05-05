import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'randomList'

export default class RandomList extends Component {
  constructor (props) {
    super()
    this.state = props
  }

  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
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
    const getRandomList = this.getRandomList()

    return (
    <div className={namespace}>
      {this.getRandomList.bind(this)()}
    </div>
      )
  }
}

RandomList.propTypes = {
  cell: PropTypes.object.isRequired
  , cellProps: PropTypes.element.isRequired
}
