import test from 'tape'
import {
  default as buildDeclarations,
  buildSingleDeclaration,
  isArray
} from '../../lib/utils/build-declarations'

test('buildDeclarations function', t => {
  const actual = buildDeclarations({
    borderRadius: '2px',
    display: 'block',
    width: '100%'
  })
  const expected = 'border-radius:2px;display:block;width:100%;'

  t.equal(actual, expected, 'should return a string with the css declarations')
  t.end()
})

test('buildDeclarations function', t => {
  const actual = buildDeclarations({
    display: ['-webkit-flex', 'flex']
  })
  const expected = 'display:-webkit-flex;display:flex;'

  t.equal(
    actual,
    expected,
    'should handle vendor prefixes generated by css-prefix')
  t.end()
})

test('buildSingleDeclaration function', t => {
  const actual = buildSingleDeclaration('borderRadius', '20px')
  const expected = 'border-radius:20px;'

  t.equal(actual, expected, 'should return a valid css rule')
  t.end()
})

test('isArray function', t => {
  t.ok(isArray([]))
  t.notOk(isArray({}))
  t.notOk(isArray(''))
  t.notOk(isArray(12))
  t.end()
})
