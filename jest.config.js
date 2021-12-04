const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

module.exports = createJestConfig({
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@services/(.*)$': '<rootDir>/src/shared/services/$1',
    '^@strings$': '<rootDir>/src/shared/constants/strings',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/src/components/$1',
  }
});
