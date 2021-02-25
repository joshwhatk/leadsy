module.exports = {
  extends: './node_modules/ramsey-boilerplate/config/.eslintrc.js',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    // Use additional environments (ES6, jQuery, Jasmine, etc.)
    // http://eslint.org/docs/user-guide/configuring#specifying-environments
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    module: false
  },
  rules: {
    // Add additional rules
    'prefer-reflect': 0 // http://eslint.org/docs/rules/prefer-reflect
  }
};
