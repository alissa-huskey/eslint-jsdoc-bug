module.exports = {
  extends: [
    "plugin:jsdoc/recommended",
  ],
  // the error will occurr if either or both of the following are present
  env: {
    es2021: true
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
