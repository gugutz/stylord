import test from 'tape'
import buildSelector from '../../lib/utils/build-selector'

test('buildSelector function', t => {
  const declarations = {
    borderRadius: '2px',
    width: '100%'
  }
  const actual = buildSelector('app', declarations)
  const expected = 'app_1nlygtv'

  t.equal(actual, expected, 'should return a string with hash')
  t.end()
})
