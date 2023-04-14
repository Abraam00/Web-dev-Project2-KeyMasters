const express = require('express');
const router = express.Router();

// NOTE: Add middleware to verify requests!
const middleware = require('../middlewares');

const notes = require('../controllers/note.controller.js');

// Create a new Note
router.post('/notes', middleware.verify, notes.create);

// Retrieve all Notes
// NOTE: Only this one uses verify!
//router.get('/notes', middleware.verify, notes.findAll);
router.get('/notes', middleware.verify, notes.findAll);

// Retrieve a single Note with noteId
router.get('/notes/:noteId', middleware.verify, notes.findOne);

// Update a Note with noteId
router.put('/notes/:noteId', middleware.verify, notes.update);

// Delete a Note with noteId
router.delete('/notes/:noteId', middleware.verify, notes.delete);

module.exports = router;