const express = require('express');
const router = express.Router();
const { db, Page, User } = require('../models/index');

router.get('/', (req, res, next) => {
  res.send('nothing');
});

router.post('/', (req, res, next) => {
  res.send('nothing');
});

router.get('/add', (req, res, next) => {
  res.send('nothing');
});

module.exports = router;
