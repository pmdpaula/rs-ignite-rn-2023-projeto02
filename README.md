# Rocketseat Ignite - ReactNative 2023 - Projeto 02

App ***Ignite Teams***

## Inicialização

`npx expo init igniteteams --yarn`
ou
`npx create-expo-app igniteteams --template`

## Instalações extras

### Lint e organização do código (dependências de desenvolvimento)
[eslint](https://eslint.org/docs/latest/use/getting-started)
[prettier](https://prettier.io/docs/en/install.html)
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
```
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-react @typescript-eslint/eslint-plugin
```

[Ciar alias para os imports, evitando passar caminhos complexos - babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
[Ordenar as importações - eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/)
```
yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript eslint-import-resolver-babel-module
```
ver configurações necessárias do `eslint-import-resolver-typescript` para funcionar correto com o path mapping
```
yarn add -D babel-plugin-module-resolver
```


[Ordenar as importações - eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
```
yarn add -D eslint-plugin-simple-import-sort
```


### Adição de recursos na aplicação
[Estilização de componentes - styled-components](https://styled-components.com/docs/basics#installation)
```
yarn add styled-components
yarn add -D @types/styled-components @types/styled-components-react-native
```

[Adição de fontes Google](npx expo install expo-font @expo-google-fonts/inter)
```
npx expo install expo-font @expo-google-fonts/roboto
```


## Configurações do projeto

### Path mapping

Mapeamento dos diretórios usando o babel-plugin-module-resolver.
Exemplo do que foi feito.

No arquivo `babel.config.js` foi adicionado as seguintes linhas:
```
...
plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@types': './src/@types',
          '@navigation': './src/navigation',
          '@context': './src/context',
          '@services': './src/services',
          '@config': './src/config',
          '@constants': './src/constants',
          '@store': './src/store',
          '@styles': './src/styles',
          '@i18n': './src/i18n',
          '@locales': './src/locales',

        }
      }]
    ]

```

No arquivo `tsconfig.json` foi adicionado as seguintes linhas:
```
...
"baseUrl": "./",
    "paths": {
      "@components/*": ["./src/components/*"],
      "@screens/*": ["./src/screens/*"],
      "@utils/*": ["./src/utils/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@assets/*": ["./src/assets/*"],
      "@types/*": ["./src/@types/*"],
      "@navigation/*": ["./src/navigation/*"],
      "@context/*": ["./src/context/*"],
      "@services/*": ["./src/services/*"],
      "@config/*": ["./src/config/*"],
      "@constants/*": ["./src/constants/*"],
      "@store/*": ["./src/store/*"],
      "@styles/*": ["./src/styles/*"],
      "@i18n/*": ["./src/i18n/*"],
      "@locales/*": ["./src/locales/*"],
    }
```
