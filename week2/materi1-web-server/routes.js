const express = require('express');
const path = require('path');

const router = express.Router();

// route for html
// index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
// about.html
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
// contact.html
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});
// 404.html
router.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

module.exports = router;