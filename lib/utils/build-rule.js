import prefix from 'inline-style-prefixer/static'
import buildDeclarations from './build-declarations'
import {isPseudoSelector, isMediaQuery} from './helpers'

/**
 * Build a css rule.
 * @param {string} selector - A class name.
 * @param {Object} declarations - CSS declarations.
 * @returns {string} formated css rule.
 * @example
 * // returns '.button{border-radius-2px;}'
 * buildDeclarations('button', {borderRadius:'2px'})
 */
export const buildRule = (selector, declarations) => {
  return `.${selector}{${buildDeclarations(prefix(declarations))}}`
}

/**
 * Build a css rule for pseudo selectors.
 * @param {string} selector - A class name.
 * @param {Object} declarations - CSS declarations.
 * @returns {string} formated css rule.
 * @example
 * // returns '.button:before{border-radius-2px;}'
 * buildDeclarations('button', {':before': {borderRadius:'2px'})
 */
export const buildPseudoRule = (selector, declarations) => {
  return Object.keys(declarations)
    .filter(isPseudoSelector)
    .map(declaration =>
      buildRule(`${selector}${declaration}`, declarations[declaration])
    )
    .reduce((previous, current) => previous + current, '')
}

/**
 * Build a css rule for a media query.
 * @param {string} selector - A class name.
 * @param {Object} declarations - CSS declarations.
 * @returns {string} formated css rule.
 * @example
 * // returns @media (min-width: 700px){app{color:blue;}}
 * buildMediaQueryRule('app', {'@media (min-width: 700px)': {color: 'blue'}})
 */
export const buildMediaQueryRule = (selector, declarations) => {
  return Object.keys(declarations)
    .filter(isMediaQuery)
    .map(
      declaration =>
        `${declaration}{${buildRule(selector, declarations[declaration])}}`
    )
    .reduce((previous, current) => previous + current, '')
}
