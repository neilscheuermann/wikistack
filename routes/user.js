const express = require('express');
const router = express.Router();
const { db, Page, User } = require('../models');
const { userList, userPages } = require('../views');

// /users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users))
  } catch (error) { next(error) }
})

// /users/userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    const pages = await Page.findAll({
      where: {authorId: user.id}
    });
    res.send(userPages(user, pages));
  } catch (error) { next(error) }
})

module.exports = router;
