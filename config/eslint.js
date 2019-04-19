module.exports = {
  env: {
    node: true,
    mocha: true,
    es6: true,
    protractor: true,
    jasmine: true
  },
  plugins: [
    'protractor'
  ],
  extends: [
    'plugin:protractor/recommended',
    'eslint:recommended'
  ],

  rules: {
    'quotes': ['error', 'single'],
    'no-var': 'warn',
    'camelcase': [2, {properties: 'never'}],
    'no-multiple-empty-lines': ['error', {'max': 1}],
    'protractor/no-expect-in-po': 2,
    'protractor/no-browser-pause': 2,
    'protractor/no-browser-sleep': 2,
    'protractor/by-css-shortcut': 2,
    'protractor/missing-perform': 2,
    'protractor/correct-chaining': 2,
    'protractor/missing-wait-message': 1,
    'no-magic-numbers': 1,
    'semi': ['error', 'always']
  },
  'parserOptions': {
    'ecmaVersion': 2017
  }
};
