module.exports = function () {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.spec.js',
    ],
    tests: [
      'src/**/*.spec.js',
    ],
    debug: true,
    env: {
      type: 'node',
    },
  };
};
