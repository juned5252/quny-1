
module.exports = {
  // Server configs
  server: {
    path: 'bin/www',
    execArgv: ['--harmony'],
    env: {
      NODE_ENV: 'development',
      DEBUG: 'FriendlyStuff:*'
    }
  },

  // BrowserSync configs
  browserSync: {
    online: false,
    proxy: 'http://localhost:3000'
  },

  // Mocha configs
  mocha: {
    reporter: 'dot'
  },

  // Mocha configs with Istanbul coverage enabled
  mochaIstanbul: {
    reporter: 'dot',
    istanbul: {
      dir: 'test/coverage'
    }
  },

  // selenium-standalone configs
  selenium: {
    basePath: 'test/e2e/lib',
    version: '2.53.1',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    logger: function () {},
    drivers: {
      chrome: {
        version: '2.9',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      }
    }
  }
};