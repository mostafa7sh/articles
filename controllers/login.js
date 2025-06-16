import * as loginModel from '../models/login.js'

function login(req, res) {
  const result = loginModel.checkUsernameAndPassword(req.body.username, req.body.password);

  if (result) {
    req.session.username = req.body.username;

    if (!req.body.rememberMe) {
      req.session.cookie.expires = false;
    } else {
      req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000; // 1 week
    }

    res.redirect('/articles');
  } else {
    res.render('../views/login.ejs', { error: 'Username or password is incorrect, habibi.' });
  }
}

function showLoginPage(req, res) {
    res.render('../views/login.ejs');
}

function isLoggedIn(req, res, next) {
    if (req.session.username != null) {
        return next();
    } else {
        res.redirect('/login');
    }
}


function showSignUpPage(req, res) {
    res.render('../views/signup.ejs');
}

function signUp(req, res) {
  const result = loginModel.addNewUser(req.body.username, req.body.password);

  if (result != null) {
    res.render('../views/signup.ejs', { success: 'Account created successfully! You can now log in.' });
  } else {
    res.render('../views/signup.ejs', { error: 'Username already exists, habibi. Try another one.' });
  }
}


export {
    login,
    showLoginPage,
    isLoggedIn,
    showSignUpPage,
    signUp
}