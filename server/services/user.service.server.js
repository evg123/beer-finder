
module.exports = function (app) {

  var UserModel = require("../model/user/user.model.server");
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var GoogleStrategy = require('passport-google-oauth20').Strategy;
  var bcrypt = require("bcrypt-nodejs");

  var googleConfig = {
    clientID     : process.env.GOOGLE_CLIENT_ID,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL  : process.env.GOOGLE_CALLBACK_URL,
    //profileFields: ['id', 'first_name', 'last_name', 'email']
  };

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new GoogleStrategy(googleConfig, googleStrategy));

  var redirectBase = '';
  if (process.env.WEBSERVER_URL) {
    redirectBase = process.env.WEBSERVER_URL;
  }

  app.post('/api/user', createUser);
  app.get('/api/user', findUserCredRouter);
  app.get('/api/user/search', searchUsers);
  app.put('/api/user/:userId/thank', thankUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);
  app.post('/api/login', passport.authenticate('local'), login);
  app.get ('/google/login', passport.authenticate('google', { scope : ['profile', 'email'] }));
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: redirectBase + '/',
      failureRedirect: redirectBase + '/login'
    }));
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post('/api/loggedIn', loggedIn);

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    UserModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    UserModel
      .findUserByUsername(username)
      .then(
        function(user) {
          if(user && user.username === username && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) {
            return done(err, false);
          }
        }
      );
  }

  function googleStrategy(accessToken, refreshToken, profile, cb) {
    UserModel
      .findUserByGoogleId(profile.id)
      .then(function(user) {
          if(user) {
            return user;
          } else {
            // user does not exist, create a new one
            const newUser = {};
            newUser.google = {
              id: profile.id,
              token: accessToken
            };

            newUser.username = profile.displayName;
            newUser.firstName = profile.name.givenName;
            newUser.lastName = profile.name.familyName;
            if (profile.emails.length > 0) {
              newUser.email = profile.emails[0].value;
            }

            return UserModel.createUser(newUser);
          }
        },
        function(err) {
          if (err) {
            return null;
          }
        })
      .then(
        function (user) {
          return cb(null, user);
        },
        function(err) {
          if (err) {
            return cb(err, false);
          }
        });
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    UserModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function createUser(req, res) {
    var user = req.body;
    UserModel.createUser(user)
      .then(function (data) {
        res.json(data);
      });
  }

  function findUserCredRouter(req, res) {
    if (req.query.password) {
      return findUserByCredentials(req, res);
    }
    return findUserByUsername(req, res);
  }

  function findUserByUsername(req, res) {
    const username = req.query.username;
    UserModel.findUserByUsername(username)
      .then(function (data) {
        res.json(data);
      });
  }

  function searchUsers(req, res) {
    if (req.query.query === undefined) {
      UserModel.find({})
        .then(function (data) {
          res.json(data);
        });
    }
    const query = req.query.query;
    UserModel.find({$text: {$search: query}})
      .then(function (data) {
        res.json(data);
      });
  }

  function findUserByCredentials(req, res) {
    const username = req.query.username;
    const password = req.query.password;

    UserModel.findUserByCredentials(username, password)
      .then(function (data) {
        res.json(data);
      });
  }

  function findUserById(req, res) {
    const userId = req.params.userId;

    UserModel.findUserById(userId)
      .then(function (data) {
        res.json(data);
      });
  }

  function updateUser(req, res) {
    const userId = req.params.userId;
    var user = req.body;

    UserModel.updateUser(userId, user)
      .then(function (data) {
        res.json(data);
      });
  }

  function deleteUser(req, res) {
    const userId = req.params.userId;

    UserModel.deleteUser(userId)
      .then(function (data) {
        res.json(data);
      });
  }

  function thankUser(req, res) {
    const toId = req.params.userId;
    const fromId = req.body.fromId;

    UserModel.thankUser(fromId, toId)
      .then(function (data) {
        res.json(data);
      });
  }
};
