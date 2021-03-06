module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  extends: 'airbnb-base',
  rules: {
    'import/prefer-default-export': 1,
    'no-param-reassign': 1,
    'no-new': 1,
    'no-undef': 1,
  },
};
