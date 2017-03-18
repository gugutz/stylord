import test from 'tape'
import buildRule from '../../lib/utils/build-rule'

test('buildRule function', t => {
  const actual = buildRule('app', 'border-radius:2px;')
  const expected = '.app{border-radius:2px;}'

  t.equal(actual, expected, 'should return a css rule')
  t.end()
})
