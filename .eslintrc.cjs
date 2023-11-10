module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'],
    'no-var': 'error',
    indent: ['error', 2],
    'no-mixed-spaces-and-tabs': 'error',
    quotes: [2, 'single'],
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 5 },
        multiline: { max: 5 },
      },
    ],
  },
}
