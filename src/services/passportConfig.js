const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { Admin } = require('./db'); // Asegúrate de tener el modelo Admin

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3001/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let admin = await Admin.findOne({ where: { email: profile.emails[0].value } });

    if (!admin) {
      admin = await Admin.create({
        username: profile.displayName,
        email: profile.emails[0].value,
        imageUrl: profile.photos[0].value,
        isActive: true,
      });
    }

    return done(null, admin);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser((admin, done) => {
  done(null, admin.id);
});

passport.deserializeUser(async (id, done) => {
  const admin = await Admin.findByPk(id);
  done(null, admin);
});
