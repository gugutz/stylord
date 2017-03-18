/**
 * Build a css rule.
 * @param {string} selector - A class name.
 * @param {string} declarations - CSS declaration.
 * @returns {string} formated css rule.
 * @example
 * // returns '.button{border-radius-2px;}'
 * buildDeclarations('button', 'borderRadius:2px;')
 */
export default (selector, declarations) => {
  return `.${selector}{${declarations}}`
}
