const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = '請輸入正確的信箱.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 5) {
    isFormValid = false;
    errors.password = '密碼長度需要至少6位.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = '請輸入名字.';
  }

  if (!isFormValid) {
    message = '請修正錯誤.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = '請輸入正確的信箱.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = '請輸入密碼.';
  }

  if (!isFormValid) {
    message = '請修正錯誤.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-signup', (err, token) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: '請修正錯誤.',
          errors: {
            email: '這個信箱已經被註冊過了.'
          }
        });
      }

      return res.status(400).json({
        success: false,
        message: '如果看到我，請告訴 Paul (errorcode: me400).'
      });
    }

    return res.status(200).json({
      success: true,
      message: '創建成功！可以登入囉~'
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: '如果看到我，請告訴 Paul (errorcode: ll400).'
      });
    }


    return res.json({
      success: true,
      message: '成功登入！',
      token,
      user: userData
    });
  })(req, res, next);
});


module.exports = router;
