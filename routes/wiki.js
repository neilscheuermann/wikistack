const express = require('express');
const router = express.Router();
const { db, Page, User } = require('../models/index');
const { addPage } = require('../views');

function generateSlug(title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

router.get('/', (req, res, next) => {
  res.send('nothing');
});

router.post('/', async (req, res, next) => {
  const { title, content } = req.body;
  const page = new Page({
    title,
    content,
    slug: generateSlug(title),
  });
  try {
    const returnedPage = await page.save();
    console.log(returnedPage);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
