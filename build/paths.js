var app = 'app.js';
var routes = 'routes/**/*.js';
var views = 'views/**/*.pug';
var stylus = 'assets/css/**/*.styl';
module.exports = {
  // Files paths in sources should trigger a browser refresh upon changes made to them
  sources: [app, routes, views, stylus],
  views: views,
  stylus: stylus,
  outputs: ['builtAssets/']
};
