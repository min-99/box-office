module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
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
