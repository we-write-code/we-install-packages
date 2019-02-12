module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // disallow space between function name and parentheses
    'space-before-function-paren': [2, {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],
    // allow trailing commas for multiline lists (such as arrays and objects)
    'comma-dangle': [2, "only-multiline"],
    // allow loop labels
    'no-labels': [2, {
      allowLoop: true
    }],
    // force padding for classes
    'padded-blocks': [2, {
      blocks: "never",
      classes: "always",
      switches: "never"
    }],
  }
}
