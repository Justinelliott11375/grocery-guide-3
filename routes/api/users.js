const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// model for users
const User = require('../../models/User');

// get all users via 'GET api/users'
router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

// create an item via 'POST api/users'
router.post('/', (req, res) => {
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

module.exports = router;