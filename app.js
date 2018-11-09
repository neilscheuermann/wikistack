const express = require('express');
const volleyball = require('volleyball');
const marked = require('marked');

const app = express();

app.use(volleyball);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
