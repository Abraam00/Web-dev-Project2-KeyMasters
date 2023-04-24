const express = require("express");
const router = express.Router();

// NOTE: Add middleware to verify requests!
//const middleware = require('../middlewares');

const qr = require("../controllers/qrcontroller.revised.js");

router.get("/qr/hint", qr.findHint);

// Create a new Note
//router.post('/qr', qr.create);

// Retrieve all Notes
// NOTE: Only this one uses verify!
//router.get('/notes', middleware.verify, notes.findAll);
//router.get('/qr', qr.findAll);

// Retrieve a single Note with noteId
//router.get('/qr/:qrurl', qr.findOne);

// Update a Note with noteId
// router.put('/qr/:qrId', qr.update);

// Delete a Note with noteId
// router.delete('/qr/:qrId', qr.delete);

module.exports = router;
