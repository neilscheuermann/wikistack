const express = require('express');
const app = express();
const volleyball = require('volleyball');
const marked = require('marked');
const layout = require('./views/layout');
const { db, Page, User } = require('./models/index');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

db.authenticate().then(() => {
  console.log('connected to the database');
});

db.sync({ force: true }); // WHEN?

app.use(volleyball);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);
app.get('/', (req, res) => {
  res.redirect('/wiki');
});

const PORT = 3000;

const init = async () => {
  // await User.sync();
  // await Page.sync();
  await db.sync();
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

init();

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });
