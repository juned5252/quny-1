
module.exports = {
  server: {
    path: 'bin/www', 
    execArgv: ['--harmony'],
    env: {
      NODE_ENV: 'development',
      DEBUG: 'NoNameProj:*'
    }
  },
  bs: {
    online: false,
    proxy: 'http://localhost:3000'
  }
};
