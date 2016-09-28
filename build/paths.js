var app = 'app.js';
var controllers = 'controllers/**/*.js';
var stylus = 'assets/css/**/*.styl';
var views = 'views/**/*.pug';

module.exports = {
  // BrowserSync watches these files for changes
  sources: [app, controllers, views, stylus],

  // Linting
  scripts: [
    '**/*.js',
    '!node_modules/**',
    '!bin/coverage/**',
    '!models/migrations/**'
  ],
  stylus: stylus,
  views: views,

  // Testing
  test: 'test/unit/**/*.test.js',
  nightwatch: 'nightwatch.json',
  drivers: 'bin/drivers/',
  coverage: 'bin/coverage/',
  reports: 'bin/reports/',
  bin: 'bin/',

  // Connect-Assets
  assets: 'builtAssets/'
};
