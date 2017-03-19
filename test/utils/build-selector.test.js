import assert from 'assert'
import buildSelector from '../../lib/utils/build-selector'

describe('buildSelector function', () => {
  it('should return a string with hash', () => {
    const declarations = {
      borderRadius: '2px',
      width: '100%'
    }
    const actual = buildSelector('app', declarations)
    const expected = 'app_1nlygtv'

    assert.strictEqual(actual, expected)
  })
})
