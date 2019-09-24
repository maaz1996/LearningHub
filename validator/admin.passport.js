const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { JWT_SECRET } = require("../config");
const Admin =  require("../models/admin/auth")
  
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: JWT_SECRET
    },
    async (payload, done) => {
      try {
        const admin = await Admin.findById(payload.sub);
        if (!admin) {
          return done(null, false);
        }
        done(null, admin);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use('admin-local',
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
          return done(null,{message:"Incorrect Admin"});
        }

        const isMatch = await admin.isValidPassword(password);
        if (!isMatch) {
          return done(null,{message:"Incorrect password"});
        }
        done(null, admin);
      } catch (error) {
        done(error);
      }
    }
  )
);