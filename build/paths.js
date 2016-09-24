var app = 'app.js';
var views = 'views/**/*.pug';
var controllers = 'controllers/**/*.js';
var stylus = 'assets/css/**/*.styl';
var test = 'test/unit/**/*.test.js';
var e2eLib = 'test/e2e/lib';

module.exports = {
  // Files paths in sources should trigger a browser refresh upon changes made to them
  sources: [app, controllers, views, stylus],
  views: views,
  stylus: stylus,
  test: test,
  e2eLib: e2eLib
};
