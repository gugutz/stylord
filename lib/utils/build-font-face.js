import buildDeclarations from './build-declarations'

export default rules => `@font-face{${buildDeclarations(rules)}}`
