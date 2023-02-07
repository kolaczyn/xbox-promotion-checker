/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dist'],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
}
