import prefix from 'inline-style-prefixer/static'
import buildSelector from './build-selector'
import buildRule from './build-rule'
import buildDeclarations from './build-declarations'

/**
 * Build a stylesheet.
 * @param {Object} rulesObj - The rules for the stylesheet.
 * @returns {string} formated stylesheet.
 * @example
 * // returns '.modal_hgdfgf{width:100%;}.button_guyhg{border-radius-2px;}'
 * buildStylesheet({modal: {width: '100%'}, button: {borderRadius: '2px'}})
 */
export default rulesObj =>
  Object.keys(rulesObj).reduce((previousValue, currentValue) => {
    const declarationsObj = rulesObj[currentValue]
    return previousValue +
      buildRule(
        buildSelector(currentValue, declarationsObj),
        buildDeclarations(prefix(declarationsObj)))
  }, '')
