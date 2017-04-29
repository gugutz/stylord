import assert from 'assert'
import {createGlobals} from '../lib/stylord'

describe('createGlobals function', () => {
  createGlobals({
    '*': {
      border: 0,
      boxSizing: 'inherit',
      margin: 0,
      padding: 0,
      outline: 0,
      verticalAlign: 'baseline'
    },
    body: {
      boxSizing: 'border-box',
      lineHeight: 1.5
    }
  })

  const styleSheet = document.querySelector('[data-stylord]').textContent

  it('should compile the globals to the head', () => {
    assert(
      styleSheet.indexOf(
        '*{border:0;box-sizing:inherit;margin:0;padding:0;outline:0;' +
          'vertical-align:baseline;}body{box-sizing:border-box;line-height:1.5;}'
      ) !== -1
    )
  })
})
