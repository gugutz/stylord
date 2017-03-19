import assert from 'assert'
import buildStylesheet from '../../lib/utils/build-stylesheet'

describe('buildStylesheet function', () => {
  it('return a valid stylesheet', () => {
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

    assert.strictEqual(actual, expected)
  })

  it('should prefix the css properties', () => {
    const actual = buildStylesheet({
      component: {
        transition: '200ms all linear',
        boxSizing: 'border-box',
        display: 'flex',
        color: 'blue'
      }
    })

    assert(actual.indexOf('-webkit-transition:200ms all linear;') !== -1)
    assert(
      actual.indexOf(
        'display:-webkit-box;display:-moz-box;' +
        'display:-ms-flexbox;display:-webkit-flex;display:flex;'
      ) !== -1
    )
  })
})
