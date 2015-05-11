import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import SupplierList from './index.jsx'
const {TestUtils} = addons
const {Simulate, renderIntoDocument, isElement, createRenderer} = TestUtils
const getReactNode = (dom, node) => TestUtils.findRenderedDOMComponentWithTag(dom, node)
const getDOMNode = (dom, node) => getReactNode(dom, node).getDOMNode()
const getDOMNodes = (dom, type) => TestUtils.scryRenderedDOMComponentsWithTag(dom, type)
const getDOMNodeText = (dom, node) => getDOMNode(dom, node).textContent

test('SupplierList: constructor', (t) => {
  const supplierList = React.createElement(SupplierList)
  t.ok(
    isElement(supplierList)
    , 'is a valid react component'
  )

  t.end()
})

// TODO: delete me. I'm just an example!
test('SupplierList rendered DOM', (t) => {
  const name = 'Bert'
  const supplierList = React.createElement(SupplierList, {name})
  const dom = renderIntoDocument(supplierList)

  t.equal(
    getDOMNodeText(dom, 'h1')
    , name
    , 'renders the `name` prop'
  )

  t.end()
})
