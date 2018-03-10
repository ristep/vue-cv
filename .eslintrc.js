// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
		'semi': 0,
		'curly': 0,
		'eqeqeq': 0,
		'require-v-for-key': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-trailing-spaces': 0,
		'space-in-parens': 0,
    'space-before-function-paren': 0,
    'object-curly-even-spacing': 0,
    'func-call-spacing': 0,
    'comma-spacing': 0,
    'comma-dangle': 0,
    'no-multi-spaces': 0,
    'one-var': 0,
    'indent': 0,
    'key-spacing': 0,
    'no-tabs': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
