const passport = require('passport');

module.exports = (app) => {

  app.get(
    "/auth/local",
    // passport.authenticate("google", {
    //   scope: ["profile", "email"]
    // })
    passport.authenticate('local-login')
  );

  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google"),
  //   (req, res) => {
  //     res.redirect('/surveys');
  //   }
  // );

  app.get(
    '/api/logout',
    (req, res) => {
      req.logout();
      res.redirect('/');
    }
  );

  app.get(
    '/api/me',
    (req, res) => {
      res.send(req.user);
    }
  );

};
