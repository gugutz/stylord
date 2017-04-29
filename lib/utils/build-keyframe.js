import buildDeclarations from './build-declarations'

/**
 * Build the steps of a keyframe.
 * @param {Object} steps - CSS declarations.
 * @returns {string} valid css keuframe steps.
 * @example
 * // returns 'from{transform:rotate(0deg);}to{transform:rotate(3600deg);}'
 * buildKeyframeSteps({
 *   from: {
 *     transform: 'rotate(0deg)'
 *   },
 *   to: {
 *     transform: 'rotate(360deg)'
 *   }
 * })
 */
export const buildKeyframeSteps = steps =>
  Object.keys(steps)
    .map(step => `${step}{${buildDeclarations(steps[step])}}`)
    .join('')

/**
 * Build a keyframes rule.
 * @param {string} animationName - the name of the animation to be created.
 * @param {Object} steps - Steps of the keyframes animation.
 * @returns {string} formated keyframes rule.
 * @example
 * // returns '@keyframes rotate{from{opacity:0;}to{opacity:1;}}'
 * buildKeyframe('rotate', {
 *   from: {
 *     opacity: 0
 *   },
 *   to: {
 *     opacity: 1
 *   }
 * })
 */
export default (animationName, steps) => {
  return `@keyframes ${animationName}{${buildKeyframeSteps(steps)}}`
}
