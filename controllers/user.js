var express = require('express');
var router = express.Router();
var passport = require('passport');
var passportLocal = require('passport-local');
var models = require('../models');
var moment = require('moment');
var newUser = false;

router.get('/signup', function (req, res) {
	if (req.user) res.redirect('/');
	res.render('signup', { title: 'Create an account' });
});

router.post('/signup', function (req, res, next) {
	models.User.create({
		username: req.body.username,
		password: req.body.password,
	}).then((user) => {
		if (!user) res.redirect('/signup');
		res.render('index', { user, newUser: true });
	});
});

router.get('/login', function (req, res) {
	if (req.user) res.redirect('/');
	res.render('login', { user: req.user });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
	res.redirect('/');
});

router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

router.get('/ping', function (req, res) {
		res.status(200).send("pong!");
});

router.get('/users', function (req, res, next) {
	models.User.findAll().then((user) => {
		if (!user) res.redirect('/');
		res.render('users', { user, moment });
	});
});

router.get('/:username', function (req, res, next) {
	models.User.findOne({
		where: { username: req.params.username },
	}).then((user) => {
		if (!user) res.redirect('/');
		res.render('user', { user, moment });
	});
});

module.exports = router;