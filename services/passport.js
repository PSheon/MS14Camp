const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

// passport.use(
//   'google-signin',
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: "/auth/google/callback",
//       proxy: true,
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ googleID: profile.id })

//       if (existingUser) {
//         // Already have record with the given ID
//         return done(null, existingUser);
//       }
//       // Don't have given ID
//       const user = await new User({ googleID: profile.id }).save();
//       done(null, user);
//     }
//   )
// );


// console.developers.google.com
passport.use('local-signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
async (req, username, password, done) => {
  const existingUser = await User.findOne({ 'local.username': username });

  if (existingUser) {
    return done(null, false);
  } else {
    const newUser = new User();
    newUser.local.username = username;
    newUser.local.password = newUser.generateHash(password);
    const user = await newUser.save();
    done(null, user);
  }
}));

passport.use('local-login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
async (req, username, password, done) => {
  const existingUser = await User.findOne({ 'local.username': username });

  if (!existingUser) {
    return done(null, false);
  }
  if (!existingUser.validPassword(password)) {
    return done(null, false);
  }
  return done(null, existingUser);
}));
