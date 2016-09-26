
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

  browserSync: {
    online: false,
    proxy: 'http://localhost:3000'
  },

  // Mocha config with Istanbul coverage enabled
  mocha: {
    reporter: 'dot',
    istanbul: {
      dir: 'bin/coverage/'
    }
  },

  // selenium-standalone
  e2eDrivers: {
    basePath: 'bin/drivers',
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
