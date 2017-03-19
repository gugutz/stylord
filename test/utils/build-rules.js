import assert from 'assert'
import buildRule from '../../lib/utils/build-rule'

describe('buildRule function', () => {
  it('should return a css rule', () => {
    const actual = buildRule('app', 'border-radius:2px;')
    const expected = '.app{border-radius:2px;}'
    assert.strictEqual(actual, expected)
  })
})
