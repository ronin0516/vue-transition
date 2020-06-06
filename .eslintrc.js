module.exports = {
  root: true,
  env: {
    node: true
  },
  env: { // eg如果不配置browser，window就会被eslint报undefined的错
    "es6": true,
    "browser": true,
    "node": true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:prettier/recommended'
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "parser": "babel-eslint",// 解决ES6 improt会报错
  "plugins": ["react", "jsx-a11y", "import"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

