module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb-base",
    "prettier"
  ],
  env: {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: [
    "import",
    "only-warn"
    // "jsx-a11y"
  ],
  rules: {
    "array-callback-return": 0,
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "dot-notation": 0,
    "import/prefer-default-export": 0,
    "indent": 0,
    "lines-around-directive": 0,
    "max-len": 0,
    "no-console": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-tabs": 0,
    "no-unused-vars": [2, { "argsIgnorePattern": "^_" }],
    "no-use-before-define": 0,
    "padded-blocks": ["error", { "classes": "always" }]
    // "jsx-a11y/no-static-element-interactions": 0,
  }
}
