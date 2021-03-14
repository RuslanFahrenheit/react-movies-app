module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'react',
    'jest',
    'jsx-a11y',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
