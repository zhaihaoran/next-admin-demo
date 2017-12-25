const passport = require('koa-passport');
const GithubStrategy = require('passport-github');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
	new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	}),
	function() {}
);

// session 序列化
passport.serializeUser(function(user, done) {
	done(null, user.id);
});

// session 反序列化
// passport.deserializeUser

passport.use(new GithubStrategy(function() {}));
