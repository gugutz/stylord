import buildDeclarations from './build-declarations'

/**
 * Build a font-face rule.
 * @param {Object} rules - CSS declarations.
 * @returns {string} formated font-face rule.
 * @example
 * // returns '@font-face{font-family:MyHelvetica;src:url(MgOpenModerna.ttf)}'
 * buildFontFace({
 *   fontFamily: 'MyHelvetica',
 *   src: 'url(MgOpenModernaBold.ttf)'
 * })
 */
export default rules => `@font-face{${buildDeclarations(rules)}}`
