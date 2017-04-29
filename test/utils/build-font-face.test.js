import assert from 'assert'
import {default as buildFontFace} from '../../lib/utils/build-font-face'

describe('buildFontFace function', () => {
  it('should return a string with the font-face declarations', () => {
    const actual = buildFontFace({
      fontFamily: 'MyHelvetica',
      src: 'local("Helvetica Neue Bold"), url(MgOpenModernaBold.ttf)',
      fontWeight: 'bold'
    })
    const expected =
      '@font-face{font-family:MyHelvetica;src:local("Helvetica Neue Bold"), url(MgOpenModernaBold.ttf);font-weight:bold;}'
    assert.strictEqual(actual, expected)
  })
})
