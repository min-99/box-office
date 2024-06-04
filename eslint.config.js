const globals = require('globals');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  languageOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      jest: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-useless-constructor': 'off',
  },
  ignorePatterns: ['node_modules/', 'build/', 'dist/'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
