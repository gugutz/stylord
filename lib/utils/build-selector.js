import hash from 'string-hash'

/**
 * Build a css selector with hashes.
 * @param {string} className - A class name.
 * @param {Object} declarationsObj - A object of css declarations.
 * @returns {string} a class name with hashes.
 * @example
 * // returns 'app_1nlygtv'
 * buildSelector('app', {borderRadius: '2px', width: '100%'})
 */
export default (className, declarationsObj) => {
  return className + '_' + hash(JSON.stringify(declarationsObj)).toString(36)
}
