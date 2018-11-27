import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import generateHtml from 'rollup-plugin-template-html'
import template from 'rollup-plugin-html'
import { uglify } from 'rollup-plugin-uglify'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    generateHtml({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    template({
      include: 'src/components/*.html'
    }),
    production && uglify() // minify, but only in production
  ]
}
