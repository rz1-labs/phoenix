/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@phoenix/eslint-config/vite.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  ignorePatterns: ["dist/"],
};
