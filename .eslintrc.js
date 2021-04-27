'use strict';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
  },
};
