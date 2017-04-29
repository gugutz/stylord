import assert from 'assert'
import {
  default as buildKeyframe,
  buildKeyframeSteps
} from '../../lib/utils/build-keyframe'

describe('buildKeyframe function', () => {
  const actual = buildKeyframe('rotate', {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '30%': {
      transform: 'rotate(180deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  })
  const expected =
    '@keyframes rotate{0%{transform:rotate(0deg);}30%{transform:rotate(180deg);}100%{transform:rotate(360deg);}}'

  assert.strictEqual(actual, expected)
})

describe('buildKeyframeSteps function', () => {
  const actual = buildKeyframeSteps({
    '0%': {
      transform: 'rotate(0deg)'
    },
    '30%': {
      transform: 'rotate(180deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  })
  const expected =
    '0%{transform:rotate(0deg);}30%{transform:rotate(180deg);}100%{transform:rotate(360deg);}'

  assert.strictEqual(actual, expected)
})
