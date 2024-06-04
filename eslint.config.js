const globals = require('globals');

module.exports = {
  languageOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      jest: true,
    },
  },
  rules: {
    'no-useless-constructor': 'off',
  },
  ignores: ['**/node_modules/', '.git/', 'build/', 'dist/'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
