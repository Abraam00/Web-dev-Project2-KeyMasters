const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const rounds = 10

const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"

const middleware = require('../middlewares')

router.post('/login', (req, res) => {
    User.findOne({ teamname: req.body.teamname })
        .then(user => {
            if (!user) res.status(404).json({ error: 'no user with that email found' })
            else {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (error) res.status(500).json(error)
                    else if (match) res.status(200).json({ token: generateToken(user.email) })
                    else res.status(403).json({ error: 'passwords do not match' })
                })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.post('/signup', (req, res) => { //updated to check db for existing user to avoid duplicates
    User.findOne({ teamname: req.body.teamname })
        .then(user => {
            if (user) res.status(404).json({ error: 'user already exists' })//checks for existing user
            else {

                bcrypt.hash(req.body.password, rounds, (error, hash) => {
                    if (error) res.status(500).json(error)
                    else {
                        const newUser = User({ teamname: req.body.teamname, password: hash })
                        newUser.save()
                            .then(user => {
                                res.status(200).json({ token: generateToken(user.teamname) })
                            })
                            .catch(error => {
                                res.status(500).json(error)
                            })
                    }
                })
            }
        })
});

router.get('/jwt-test', middleware.verify, (req, res) => {
    res.status(200).json(req.user)
})

function generateToken(user) {
    return jwt.sign({ data: user }, tokenSecret, { expiresIn: '24h' })
}

module.exports = router
