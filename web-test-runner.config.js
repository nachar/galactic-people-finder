export default {
  files: 'src/**/*.test.js',
  nodeResolve: true,
  coverage: true,
  coverageConfig: {
    threshold: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80,
    },
  },
};
