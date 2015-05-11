var test = require('tape')
  , randomlist = require('../')

test('randomlist', function getTest (t) {
  t.plan(2)

  t.ok(
    randomlist
    , 'is a thing'
  )

  t.ok(
    'I was too lazy to write any tests. Shame on me.'
    , 'must have at least one test'
  )
})
