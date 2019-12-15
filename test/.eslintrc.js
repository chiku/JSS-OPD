module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-unused-expressions': 0,
    'import/prefer-default-export': 1,
    'no-param-reassign': 1,
    'no-new': 1,
    'no-undef': 1,
  },
};
