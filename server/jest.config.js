module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  resetMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/app.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  verbose: true,
  forceExit: true,
};
