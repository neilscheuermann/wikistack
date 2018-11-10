const express = require('express');
const router = express.Router();
const { db, Page, User } = require('../models');
const { addPage, wikiPage, main } = require('../views');

// /wiki/
router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    console.log(pages);
    res.send(main(pages));
  } catch (error) { next(error) }
});

// After clicking submit on form
router.post('/', async (req, res, next) => {
  try {
    const page = new Page(req.body);
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email
      }
    });

    await page.save();
    page.setAuthor(user);
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
});

// /wiki/add
router.get('/add', (req, res, next) => {
  res.send(addPage());
});

// wiki/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {slug: req.params.slug}
    })
    const user = await User.findOne({
      where: {id: page.authorId}
    });
    console.log(user)
    res.send(wikiPage(page, user))
  } catch (error) { next(error) }
})

module.exports = router;
