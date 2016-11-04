var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models').User;

passport.use(new LocalStrategy(
function (username, password, done) {
  User.findOne({ where: { username } })
    .then(function (user) {
      if (!user) {
        return done(null, false);
      } else {
        if (user.password != password) {
          return done(null, false);
        }
      }
      return done(null, user);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(function (username, done) {
  User
    .find({ where: { username: username }})
    .then(function (user) {
      done(null, user);
    });
});