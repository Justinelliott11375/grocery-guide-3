const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// validate field inputs
const validateRegisterInput = require('../../validation/register');

// model for users
const User = require('../../models/User');

// get all users via 'GET api/users'
router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

// create a new user via 'POST api/users'
router.post('/', (req, res) => {

    //valid user input from req.body
    const { errors, isValid } = validateRegisterInput(req.body);

    // return error status if not valid
  if (!isValid) {
    return res.status(400).json(errors);
  }
    User.findOne({ username: req.body.username })
    .then(user => {
        if(user) {
            return res.status(400).json({username: "There is already an account registered with that username"});
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
            const salt = bcrypt.genSaltSync();
            const hashedPassword = bcrypt.hashSync(newUser.password, salt);
            newUser.password = hashedPassword;

            newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        }
    });
});

// log in existing user via 'POST api/users/login
router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username})
    .then(user => {
        // return 404 if no user found
        if(!user) {
            return res.status(404).json({username: "User not found"});
        } 
        //compare entered password with stored password
        bcrypt.compare(password, user.password)
        .then(isValid => {
            if(isValid) {
                const payload = { id: user.id,username: user.username }; 
                // Create JWT Payload

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 5000 }, 
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                )
            } else {
                return res.status(400).json({password: "Incorrect password"})
            }
        })
    })
})

//return current user via 'GET api/users/current'
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json(req.user);
    }
  );

module.exports = router;