import prefix from 'inline-style-prefixer/static'
import buildDeclarations from './build-declarations'

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
    .filter(declaration => declaration.indexOf(':') === 0)
    .map(declaration =>
      buildRule(
        `${selector}${declaration}`,
        declarations[declaration]
      ))
    .reduce((previous, current) => previous + current, '')
}
