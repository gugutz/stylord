import buildStylesheet from './utils/build-stylesheet'
import buildSelector from './utils/build-selector'

const style = document.createElement('style')
style.dataset.stylord = ''
document.head.appendChild(style)

/**
 * Create a stylesheet and inject it to the head of the application.
 * @param {Object} rules - CSS rules to be rendered.
 * @returns {Object} the class names of the css modules created.
 * @example
 * // returns {modal: 'modal_hgdfgf', button: 'button_guyhg'}
 * buildStylesheet({
 *   modal: {
 *     width: '100%'
 *   },
 *   button: {
 *     borderRadius: '2px'
 *   }
 * })
 */
export default rules => {
  style.appendChild(document.createTextNode(buildStylesheet(rules)))

  return Object.keys(rules).reduce((previous, current) => {
    previous[current] = buildSelector(current, rules[current])
    return previous
  }, {})
}
