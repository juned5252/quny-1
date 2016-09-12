var app = 'app.js';
var routes = 'routes/**/*.js';
var views = 'views/**/*.jade';
var output = 'public/dist/';

module.exports = {
  // Files paths in sources should trigger a browser refresh upon
  // changes made to them
  sources: [app, routes, views],
  stylus: 'public/stylus/**/*.styl',
  output: output,
  cssOutput: output + 'css/'
};
