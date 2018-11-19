const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(userData) {
  let errors = {};
  userData.username = !isEmpty(userData.username) ? userData.username : '';
  userData.password = !isEmpty(userData.password) ? userData.password : '';
  userData.passwordConfirmation = !isEmpty(userData.passwordConfirmation) ? userData.passwordConfirmation : '';

  if (!validator.isLength(userData.username, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (validator.isEmpty(userData.username)) {
    errors.username = 'Username field is required';
  }

  if (validator.isEmpty(userData.password)) {
    errors.password = 'Password field is required';
  }

  if (!validator.isLength(userData.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (validator.isEmpty(userData.passwordConfirmation)) {
    errors.passwordConfirmation = 'Confirm Password field is required';
  } else {
    if (!validator.equals(userData.password, userData.passwordConfirmation)) {
      errors.passwordConfirmation = 'Passwords must match';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};