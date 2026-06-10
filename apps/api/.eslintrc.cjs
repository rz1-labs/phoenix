/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@phoenix/eslint-config/server.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
