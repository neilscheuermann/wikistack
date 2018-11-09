const express = require('express');
const volleyball = require('volleyball');
const marked = require('marked');
const layout = require('./views/layout');
const { db } = require('./models');

const app = express();

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(volleyball);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const message = layout('hello world');
  res.send(message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
