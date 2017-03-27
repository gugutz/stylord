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
 * stylord({
 *   modal: {
 *     width: '100%'
 *   },
 *   button: {
 *     borderRadius: '2px'
 *   }
 * })
 */
export default rules => {
  const styles = Object.keys(rules)
    .map(rule => ({
      componentName: rule,
      rule: rules[rule],
      className: buildSelector(rule, rules[rule])
    }))
    .map(({className, rule, componentName}) => ({
      componentName,
      className,
      rule: buildStylesheet(className, rule)
    }))

  const modules = styles.reduce((previous, current) => ({
    ...previous,
    [current.componentName]: current.className
  }), {})

  const stylesheet = styles.reduce((previous, current) => {
    return previous + current.rule
  }, '')

  style.appendChild(document.createTextNode(stylesheet))

  return modules
}
