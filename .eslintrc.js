module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-essential',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
