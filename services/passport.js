const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);

});

passport.deserializerUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});


passport.use(new GoogleStrategy({
    clientId: keys.googleClientId,
    cleintSecret: keys.googleClientSecret,
    callbackURL: 'localhost:5000/auth/google/callback',
    proxy: true,

}, (accessToken, refershToken, profile, done) => {

    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                // we already have a record with given profile ID

                done(null, existingUser);

            } else {
                // we don't have a user record with this ID, make a new record

                new User({ googleId: profile.id }).save().
                then(user => done(null, user));

            }
        })




}));