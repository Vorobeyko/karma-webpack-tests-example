const webpack = require('../../webpack.config')
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function setKarmaConfig(config) {
  const baseConfig = {
    basePath: './',
    browsers: ['ChromeHeadlessNoSandbox', 'FirefoxHeadless'],
    browserDisconnectTolerance: 1, // default 0
    browserDisconnectTimeout: 10000, // default 60000
    frameworks: ['mocha', 'chai'],
    files: ['karma.tests.js'],
    mochaReporter: {
      showDiff: true,
    },
    port: 4444,
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-mocha-reporter',
    ],
    client: {
      captureConsole: true,
    },
    preprocessors: {
      'karma.tests.js': ['webpack'],
    },
    reporters: ['mocha'],
    webpack,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-insecure-localhost', '--window-size=1440,900'],
      },
    },
    singleRun: Boolean(process.env.SINGLE_RUN),
  }

  const newConfig = baseConfig

  config.set(newConfig)
}
