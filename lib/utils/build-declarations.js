import kebabCase from 'kebab-case'

/**
 * Check if the given argument is an array.
 * @param {*} arr - argument to be checked if it is an Array.
 * @returns {boolean} true if the arr is an Array.
 * @example
 * // returns true
 * isArray([])
 * @example
 * // returns false
 * isArray({})
 */
export const isArray = arr =>
  Object.prototype.toString.call(arr) === '[object Array]'

/**
 * Build a single css declaration.
 * @param {string} property - The property of the css declaration.
 * @param {string} value - The value of the css declaration.
 * @returns {string} formated css declaration.
 * @example
 * // returns 'width:100%;'
 * buildSingleDeclaration('width', '100%')
 */
export const buildSingleDeclaration =
  (property, value) => `${kebabCase(property)}:${value};`

/**
 * Build the css declarations.
 * @param {Object} declarationsObj - A style object.
 * @returns {string} formated css declarations.
 * @example
 * // returns 'border-radius-2px;'
 * buildDeclarations({borderRadius: '2px'})
 * @example
 * // returns '-webkit-user-select:none;'
 * buildDeclarations({WebkitUserSelect: 'none'})
 * @example
 * // returns 'display:-webkit-flex;display:flex;'
 * buildDeclarations({display: ['-webkit-flex', 'flex']})
 */
export default declarationsObj =>
  Object.keys(declarationsObj)
    .filter(declaration => declaration.indexOf(':') !== 0)
    .reduce((previousValue, currentValue) => {
      if (isArray(declarationsObj[currentValue])) {
        return previousValue + declarationsObj[currentValue].reduce((a, b) =>
          a + buildSingleDeclaration(currentValue, b)
        , '')
      }
      return previousValue + buildSingleDeclaration(currentValue, declarationsObj[currentValue])
    }, '')
