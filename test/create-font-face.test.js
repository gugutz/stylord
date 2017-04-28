import assert from 'assert'
import {createFontFace} from '../lib/stylord'

describe('createFontFace function', () => {
  createFontFace({
    fontFamily: 'MyHelvetica',
    src: 'local("Helvetica Neue Bold"), url(MgOpenModernaBold.ttf)',
    fontWeight: 'bold'
  })

  const styleSheet = document.querySelector('[data-stylord]').textContent

  it('should compile the font-face to the head', () => {
    assert(styleSheet.indexOf(
      '@font-face{font-family:MyHelvetica;' +
      'src:local("Helvetica Neue Bold"), url(MgOpenModernaBold.ttf);' +
      'font-weight:bold;}'
    ) !== -1)
  })
})
