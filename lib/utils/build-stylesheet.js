import {buildRule, buildPseudoRule, buildMediaQueryRule} from './build-rule'

/**
 * Build a css rule.
 * @param {string} selector - A class name.
 * @param {Object} declarations - CSS declarations.
 * @returns {string} formated css rule.
 * @example
 * // returns '.button{border-radius: 2px;}.button:after{content:""}'
 * buildDeclarations('button', {
 *   borderRadius: '2px',
 *   ':after': {
 *     content: '""'
 *   }
 * })
 */
export default (selector, declarations, globalSelector = false) => {
  const pseudoSelectors = buildPseudoRule(
    selector,
    declarations,
    globalSelector
  )
  const normalSelector = buildRule(selector, declarations, globalSelector)
  const mediaQuery = buildMediaQueryRule(selector, declarations, globalSelector)

  return normalSelector + pseudoSelectors + mediaQuery
}
