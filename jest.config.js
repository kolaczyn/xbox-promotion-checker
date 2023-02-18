/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dist'],
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
}
