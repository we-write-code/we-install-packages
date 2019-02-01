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
    'space-before-function-paren': [1, {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],
    // allow trailing commas for multiline lists (such as arrays and objects)
    'comma-dangle': [1, "only-multiline"],
    // allow loop labels
    'no-labels': [2, {
      allowLoop: true
    }],
    'padded-blocks': [1, {
      blocks: "never",
      classes: "always",
      switches: "never"
    }]
  }
}
