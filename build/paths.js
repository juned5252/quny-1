var app = 'app.js';
var controllers = 'controllers/**/*.js';
var stylus = 'assets/css/**/*.styl';
var views = 'views/**/*.pug';

module.exports = {
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
  bin: 'bin/',

  // Connect-Assets
  assets: 'builtAssets/'
};
