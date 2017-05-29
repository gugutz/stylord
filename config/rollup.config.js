import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import {readFileSync} from 'fs'
import nodeResolve from 'rollup-plugin-node-resolve'

const pkg = JSON.parse(readFileSync('./package.json'))
const dependencies = Object.keys(pkg.dependencies || {})

export default {
  entry: 'lib/stylord.js',
  external: dependencies,
  plugins: [
    buble({
      objectAssign: 'Object.assign'
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  targets: [
    {
      format: 'cjs',
      dest: 'dist/stylord.js'
    },
    {
      format: 'es',
      dest: 'dist/stylord.es.js'
    }
  ]
}
