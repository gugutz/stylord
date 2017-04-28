import assert from 'assert'
import {
  startsWith,
  isPseudoSelector,
  isMediaQuery
} from '../../lib/utils/helpers'

describe('startsWith function', () => {
  it('should return true', () => {
    assert(startsWith('Hello World', 'Hell'))
  })

  it('should return false', () => {
    assert(!startsWith('Hello World', 'Heaven'))
  })
})

describe('isPseudoSelector function', () => {
  it('should return true', () => {
    assert(isPseudoSelector(':after'))
  })

  it('should return false', () => {
    assert(!isPseudoSelector('borderRadius'))
  })
})

describe('isMediaQuery function', () => {
  it('should return true', () => {
    assert(isMediaQuery('@media (min-width: 700px)'))
  })

  it('should return false', () => {
    assert(!isMediaQuery('borderRadius'))
  })
})
