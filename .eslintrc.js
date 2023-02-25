/* eslint-disable no-undef */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    // 'import',
  ],
  'rules': {
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',

    // 'import/no-relative-parent-imports': 'warn',
    // 'import/no-unresolved': [2, { commonjs: true, amd: true }],
    // 'import/named': 2,
    // 'import/namespace': 2,
    // 'import/default': 2,
    // 'import/export': 2,
  },
  'settings': {
    'react': {
      'version': 'detect'
    },
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx']
    // },
    // 'import/resolver:': {
    //   'typescript': {
    //     'alwaysTryTypes': true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
    //     'project': 'tsconfig.json',
    //   },
    //   'node': {
    //     'project': ['tsconfig.json', 'package/tsconfig.json']
    //   },
    //   'babel-module': {},
    // },
  }
};
