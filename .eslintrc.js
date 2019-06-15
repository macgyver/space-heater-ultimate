module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-spacing': 'off', // purely visual, and already covered by Prettier
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  overrides: [
    {
      files: ['**/*.test.js', 'test/**/*'],
      env: {
        mocha: true,
      },
    },
  ],

  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript',
  ],
}
