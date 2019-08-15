module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double", "avoid-escape"],
    "semi": ["error", "always"],
    "no-return-assign": ["off"],
  },
}
