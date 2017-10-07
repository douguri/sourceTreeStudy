// http://passportjs.org/guide/twitter/
var TWITTER_CONSUMER_KEY = 'bCGBXS9x3bna0KI8dZ4t0YgIG';
var TWITTER_CONSUMER_SECRET = '6kW3WfSM6TrkJTF8WYqWfJ3XD3vXTiXuYXuW13K8XSGrjTfI5B';
var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

// Sessionの設定
// http://passportjs.org/guide/configure/
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
  	passport.session.id = profile.id;

  	// tokenとtoken_secretをセット
  	profile.twitter_token = token;
    profile.twitter_token_secret = tokenSecret;

    process.nextTick(function () {
    	return done(null, profile);
    });
  }
));

module.exports = {passport: passport};