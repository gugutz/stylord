import assert from 'assert'
import {
  buildRule,
  buildPseudoRule,
  buildMediaQueryRule
} from '../../lib/utils/build-rule'

describe('buildRule function', () => {
  it('should return a css rule', () => {
    const actual = buildRule('app', {borderRadius: '2px'})
    const expected = '.app{border-radius:2px;}'
    assert.strictEqual(actual, expected)
  })
})

describe('buildPseudoRule function', () => {
  it('should return a css rule for a pseudo selector', () => {
    const actual = buildPseudoRule('app', {
      ':before': {
        color: 'blue'
      }
    })
    const expected = '.app:before{color:blue;}'
    assert.strictEqual(actual, expected)
  })

  it('should ignore the rules that are not for pseudo selectors', () => {
    const actual = buildPseudoRule('app', {
      borderRadius: '2px',
      ':before': {
        color: 'blue'
      },
      color: 'red'
    })
    const expected = '.app:before{color:blue;}'
    assert.strictEqual(actual, expected)
  })
})

describe('buildMediaQueryRule function', () => {
  it('should return a css rule for a media query', () => {
    const actual = buildMediaQueryRule('app', {
      borderRadius: '2px',
      '@media (min-width: 700px)': {
        color: 'blue'
      },
      color: 'red'
    })
    const expected = '@media (min-width: 700px){.app{color:blue;}}'
    assert.strictEqual(actual, expected)
  })
})
