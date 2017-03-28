import assert from 'assert'
import {startsWith, isPseudoSelector} from '../../lib/utils/helpers'

describe('startsWith function', () => {
  it('should return true', () => {
    assert(startsWith('Hello World', 'Hell'))
  })

  it('should return false', () => {
    assert(!startsWith('Hello World', 'Heaven'))
  })
})

describe('isPseudoSelector', () => {
  it('should return true', () => {
    assert(isPseudoSelector(':after'))
  })

  it('should return false', () => {
    assert(!isPseudoSelector('borderRadius'))
  })
})
