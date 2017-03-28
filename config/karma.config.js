process.env.NODE_ENV = 'test'

module.exports = function (config) {
  const customLaunchers = {
    chrome: {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    firefox: {
      base: 'SauceLabs',
      browserName: 'firefox'
    },
    internetExplorer: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11.0',
      platform: 'Windows 7'
    },
    safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: '10.0'
    },
    edge: {
  		base: 'SauceLabs',
  		browserName: 'MicrosoftEdge',
  		platform: 'Windows 10'
  	}
  }

  const mainConfig = {
    basePath: __dirname + '/..',
    frameworks: ['browserify', 'mocha'],
    files: [
      'test/**/*.js'
    ],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'coverage/'
        },
        {
          type: 'lcovonly',
          subdir: '.',
          file: 'report-lcovonly.txt'
        }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    concurrency: Infinity,
    singleRun: true,
    autoWatch: true
  }

  const saucelabsConfig = {
    reporters: ['mocha', 'coverage', 'saucelabs'],
    sauceLabs: {
      testName: 'Stylord tests'
    },
    captureTimeout: 120000,
    customLaunchers,
    browsers: Object.keys(customLaunchers)
  }

  const karmaConfig = process.env.TRAVIS ?
    Object.assign(mainConfig, saucelabsConfig) :
    mainConfig

  config.set(karmaConfig)
}
