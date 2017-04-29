import buildStylesheet from './utils/build-stylesheet'
import buildSelector from './utils/build-selector'
import buildKeyframe from './utils/build-keyframe'
import buildFontFace from './utils/build-font-face'

const style = document.createElement('style')
style.dataset.stylord = ''
document.head.appendChild(style)

/**
 * Create a stylesheet and inject it to the head of the application.
 * @param {Object} rules - CSS rules to be rendered.
 * @returns {Object} the class names of the css modules created.
 * @example
 * // returns {modal: 'modal_hgdfgf', button: 'button_guyhg'}
 * createStyles({
 *   modal: {
 *     width: '100%'
 *   },
 *   button: {
 *     borderRadius: '2px'
 *   }
 * })
 */
export const createStyles = rules => {
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

  const modules = styles.reduce(
    (previous, current) => ({
      ...previous,
      [current.componentName]: current.className
    }),
    {}
  )

  const stylesheet = styles.reduce((previous, current) => {
    return previous + current.rule
  }, '')

  style.appendChild(document.createTextNode(stylesheet))

  return modules
}

/**
 * Create a keyframe animation and inject it to the head of the application.
 * @param {Object} rules - CSS keyframe to be create.
 * @returns {Object} the names of the keyframes created.
 * @example
 * // returns {fade: 'fade_hgdfgf'}
 * stylord({
 *   fade: {
 *     from: {
 *       opacity: 1
 *     },
 *     to: {
 *       opacity: 0
 *     }
 *   }
 * })
 */
export const createKeyframes = rules => {
  const keyframes = Object.keys(rules)
    .map(rule => ({
      steps: rules[rule],
      keyframe: rule,
      animationName: buildSelector(rule, rules[rule])
    }))
    .map(({keyframe, steps, animationName}) => ({
      animationName,
      keyframe,
      rule: buildKeyframe(animationName, steps)
    }))

  const modules = keyframes.reduce(
    (previous, current) => ({
      ...previous,
      [current.keyframe]: current.animationName
    }),
    {}
  )

  const stylesheet = keyframes.reduce((previous, current) => {
    return previous + current.rule
  }, '')

  style.appendChild(document.createTextNode(stylesheet))

  return modules
}

/**
 * Create a font-face and inject it to the head of the application.
 * @param {Object} rules - CSS font-face rules to be rendered.
 * @example
 * createFontFace({
 *   fontFamily: 'MyHelvetica',
 *   src: 'local("Helvetica Neue Bold"), url(MgOpenModernaBold.ttf)',
 *   fontWeight: 'bold'
 * })
 */
export const createFontFace = rules => {
  style.appendChild(document.createTextNode(buildFontFace(rules)))
}

/**
 * Create a global css and inject it to the head of the application.
 * @param {Object} rules - CSS global rules to be rendered.
 * @example
 * createGlobals({
 *   '*': {
 *     border: 0,
 *     boxSizing: 'inherit',
 *     margin: 0,
 *     padding: 0,
 *     outline: 0,
 *     verticalAlign: 'baseline'
 *   },
 *   body: {
 *     boxSizing: 'border-box',
 *     lineHeight: 1.5
 *   }
 * })
 */
export const createGlobals = rules => {
  const globalStyles = Object.keys(rules)
    .map(rule => buildStylesheet(rule, rules[rule], true))
    .join('')

  style.appendChild(document.createTextNode(globalStyles))
}
