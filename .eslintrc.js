module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'only-multiline'],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [
      0,
      { enums: false, typedefs: false, ignoreTypeReferences: false },
    ],
  },
};
