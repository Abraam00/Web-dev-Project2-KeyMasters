const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const rounds = 10

const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"

const middleware = require('../middlewares')

router.post('/adminlogin', (req, res) => {
    Admin.findOne({ adminname: req.body.adminname })
        .then(admin => {
            if (!admin) res.status(404).json({ error: 'no admin with that email found' })
            else {
                bcrypt.compare(req.body.password, admin.password, (error, match) => {
                    if (error) res.status(500).json(error)
                    else if (match) res.status(200).json({ token: generateToken(admin.adminname) })
                    else res.status(403).json({ error: 'passwords do not match' })
                })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.post('/adminsignup', (req, res) => {
    bcrypt.hash(req.body.password, rounds, (error, hash) => {
        if (error) res.status(500).json(error)
        else {
            const newAdmin = Admin({ adminname: req.body.adminname, password: hash })
            newAdmin.save()
                .then(admin => {
                    res.status(200).json({ token: generateToken(admin.adminname) })
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        }
    })
});

router.get('/jwt-test', middleware.verify, (req, res) => {
    res.status(200).json(req.admin)
})

function generateToken(admin) {
    return jwt.sign({ data: admin }, tokenSecret, { expiresIn: '24h' })
}

module.exports = router
