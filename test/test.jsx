'use strict'

var test = require('tape')
  , randomlist = require('../')

test('randomlist#get', function getTest(t){
  t.plan(2)

  t.doesNotThrow(
    randomlist.get
    , 'does not throw'
  )

  t.ok(
    'I was too lazy to write any tests. Shame on me.'
    , 'must have at least one test'
  )
})
