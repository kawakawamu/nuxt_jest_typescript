/**
 * Jest Configuration
 */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { readFileSync } = require('fs')
const { parse } = require('jsonc-parser')
// extendsを自動的に解決してマージできないため、compilerOptions.pathsを書いているファイルを指定する
const { compilerOptions } = parse(readFileSync('./tsconfig.json').toString())
const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
})

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['js', 'vue', 'ts', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
}
