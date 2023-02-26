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
    'plugin:import/recommended',
    'plugin:import/typescript'
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
    'module-resolver',
    'simple-import-sort'
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
    // 'module-resolver/use-alias': [0, {
    //   // 'ignoreDepth': 2,
    //   // 'projectRoot': './src',
    //   'extensions': ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg'],
    //   'alias': {
    //     'root': ['.'],
    //     'alias': {
    //       '@assets': './src/assets',
    //       '@components': './src/components',
    //       '@routes': './src/routes',
    //       '@screens': './src/screens',
    //       '@storage': './src/storage',
    //       '@theme': './src/theme',
    //       '@utils': './src/utils',
    //       '@hooks': './src/hooks',
    //       '@types': './src/@types',
    //       '@navigation': './src/navigation',
    //       '@context': './src/context',
    //       '@services': './src/services',
    //       '@config': './src/config',
    //       '@constants': './src/constants',
    //       '@store': './src/store',
    //       '@styles': './src/styles',
    //       '@i18n': './src/i18n',
    //       '@locales': './src/locales',
    //     }
    //   }
    // }],
    'import/namespace': 0,
    'import/no-unresolved': [2, { ignore: ['^@'] }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  'settings': {
    'react': {
      'version': 'detect',
      'import/resolver:': {
        typescript: true,
        node: true
        // },
        // 'typescript': {
        //   'alwaysTryTypes': true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        //   'project': 'tsconfig.json',
        // },
        // 'node': {
        //   'project': ['tsconfig.json', 'package/tsconfig.json']
        // },
      },
      'babel-module': {}
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
  }
};
