const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { Admin } = require('../db');
const bcrypt = require('bcryptjs');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.URL_API_GOOGLE,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      
      let admin = await Admin.findOne({ where: { email: profile.emails[0].value } });
      
      if (!admin) {

		const passwordRandom = await bcrypt.hash(profile.id + process.env.JWT_SECRET, 10);

        admin = await Admin.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          password: passwordRandom, 
          isActive: true,
        });
      }

      return done(null, admin);
    } catch (error) {
      return done(error, null);
    }
  }
));

passport.serializeUser((admin, done) => done(null, admin.id));
passport.deserializeUser(async (id, done) => {
  const admin = await Admin.findByPk(id);
  done(null, admin);
});
