import test from 'tape'
import buildStylesheet from '../../lib/utils/build-stylesheet'

test('buildStylesheet function', t => {
  const actual = buildStylesheet({
    app: {
      borderRadius: '2px',
      width: '100%'
    },
    button: {
      color: 'red',
      display: 'block'
    }
  })
  const expected = '.app_1nlygtv{border-radius:2px;width:100%;}.button_1u9pmmq{color:red;display:block;}'

  t.equal(actual, expected, 'return a valid stylesheet')
  t.end()
})
