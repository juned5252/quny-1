var app         = 'app.js';
var controllers = 'controllers/**/*.js';
var stylus      = 'assets/css/**/*.styl';
var views       = 'views/**/*.pug';

module.exports = {
  // BrowserSync watches these files for changes
  sources: [app, controllers, views, stylus],

  // Linting
  scripts: ['**/*.js', '!node_modules/**', '!test/coverage/**'],
  stylus: stylus,
  views:  views,

  // Testing
  test:       'test/unit/**/*.test.js',
  nightwatch: 'test/e2e/nightwatch.json',
  e2eLib:     'test/e2e/lib',
  coverage:   'test/coverage',

  // Connect-Assets
  assets: 'builtAssets/'
};
