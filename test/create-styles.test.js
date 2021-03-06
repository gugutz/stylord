import assert from 'assert'
import {createStyles} from '../lib/stylord'

describe('stylord function', () => {
  const rules = {
    app: {
      color: 'blue',
      width: '100%',
      ':after': {
        content: '""',
        display: 'block'
      },
      '@media (min-width: 700px)': {
        width: '300px',
        ':not(:last-child)': {
          marginBottom: '10px'
        }
      }
    }
  }
  const classNames = createStyles(rules)
  const styleSheet = document.querySelector('[data-stylord]').textContent

  it('should compile the styles to head of the page', () => {
    assert(styleSheet.indexOf(classNames.app) !== -1)
  })

  it('should have the rules described in the rules object', () => {
    assert(styleSheet.indexOf('color:blue;') !== -1)
    assert(styleSheet.indexOf('width:100%;') !== -1)
  })

  it('should support pseudo selectors', () => {
    assert(styleSheet.indexOf(':after{content:"";display:block;}') !== -1)
  })

  it('should support media queries', () => {
    assert(styleSheet.indexOf('@media (min-width: 700px){') !== -1)
  })

  console.log(styleSheet)

  it('should handle pseudo selectors inside media queries', () => {
    assert(
      styleSheet.indexOf(
        '@media (min-width: 700px){.app_1inrscb{width:300px;}.app_1inrscb:not(:last-child){margin-bottom:10px;}}'
      ) !== -1
    )
  })
})
