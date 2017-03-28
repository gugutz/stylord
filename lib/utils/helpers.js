/**
 * Check if a string begins with the characters of a specified string.
 * @param {string} str - Original string.
 * @param {string} searchString - Characters to be searched.
 * @returns {boolean} true if str starts with searchString
 * @example
 * // returns true
 * startsWith('Hello World', 'Hell')
 * @example
 * // returns false
 * startsWith('Hello World', 'Heaven')
 */
export const startsWith = (str, searchString) =>
  str.indexOf(searchString) === 0

/**
 * Check if the given string is a pseudo selector/class
 * @param {string} str - String to be tested.
 * @return {boolean} true if str is a pseudo selector/class
 * @example
 * // returns true
 * isPseudoSelector(':after')
 * @example
 * // returns false
 * isPseudoSelector('borderRadius')
 */
export const isPseudoSelector = str => startsWith(str, ':')

/**
 * Check if the given string is a media querie.
 * @param {string} str - String to be tested.
 * @return {boolean} true if str is a media querie
 * @example
 * // returns true
 * isMediaQuerie('@media (min-width: 700px)')
 * // returns false
 * isMediaQuerie('borderRadius')
 */
export const isMediaQuery = str => startsWith(str, '@media')
