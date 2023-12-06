const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    res.locals.isLoggedIn = true;
    req.session.loggedIn = true;
    
    next();
  }
};

module.exports = withAuth;
