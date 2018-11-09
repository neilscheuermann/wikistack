const express = require('express');
const router = express.Router();
const { db, Page, User } = require('../models/index');
const { addPage } = require('../views')

router.get('/', (req, res, next) => {
  res.send('nothing');
});

router.post('/', (req, res, next) => {
  res.send(req.body);
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
