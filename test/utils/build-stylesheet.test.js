import assert from 'assert'
import buildStylesheet from '../../lib/utils/build-stylesheet'

describe('buildStylesheet function', () => {
  it('return a valid stylesheet', () => {
    const actual = buildStylesheet('app123', {
      borderRadius: '2px',
      width: '100%'
    })
    const expected = '.app123{border-radius:2px;width:100%;}'

    assert.strictEqual(actual, expected)
  })

  it('should prefix the css properties', () => {
    const actual = buildStylesheet('component', {
      transition: '200ms all linear',
      boxSizing: 'border-box',
      display: 'flex',
      color: 'blue'
    })

    assert(actual.indexOf('-webkit-transition:200ms all linear;') !== -1)
    assert(
      actual.indexOf(
        'display:-webkit-box;display:-moz-box;' +
        'display:-ms-flexbox;display:-webkit-flex;display:flex;'
      ) !== -1
    )
  })

  it('should accept pseudo selectors', () => {
    const actual = buildStylesheet('app123', {
      borderRadius: '2px',
      ':before': {
        content: '""'
      }
    })
    const expected = '.app123{border-radius:2px;}.app123:before{content:"";}'

    assert.strictEqual(actual, expected)
  })
})
