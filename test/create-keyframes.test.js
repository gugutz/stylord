import assert from 'assert'
import {createKeyframes} from '../lib/stylord'

describe('createKeyframes function', () => {
  const keyframes = createKeyframes({
    rotate: {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '30%': {
        transform: 'rotate(180deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    fade: {
      from: {
        opacity: 1
      },
      to: {
        opacity: 0
      }
    }
  })

  const styleSheet = document.querySelector('[data-stylord]').textContent

  it('should compile the keyframes to head of the page', () => {
    assert(styleSheet.indexOf(keyframes.rotate) !== -1)
    assert(styleSheet.indexOf(keyframes.fade) !== -1)
  })

  it('should return an object', () => {
    assert.strictEqual(typeof keyframes, 'object')
  })

  it('should return an string for each key', () => {
    assert.strictEqual(typeof keyframes.fade, 'string')
    assert.strictEqual(typeof keyframes.rotate, 'string')
  })

  it('should support percents', () => {
    assert(styleSheet.indexOf(
      '0%{transform:rotate(0deg);}' +
      '30%{transform:rotate(180deg);}' +
      '100%{transform:rotate(360deg);}'
    ) !== -1)
  })
  it('should support from/to', () => {
    assert(styleSheet.indexOf(
      'from{opacity:1;}' +
      'to{opacity:0;}'
    ) !== -1)
  })
})
