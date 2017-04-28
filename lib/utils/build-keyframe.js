import buildDeclarations from './build-declarations'

const buildKeyframeSteps = steps =>
  Object.keys(steps)
    .map(step => `${step}{${buildDeclarations(steps[step])}}`)
    .join('')

export default (animationName, steps) => {
  return `@keyframes ${animationName} {${buildKeyframeSteps(steps)}}`
}
