const express = require('express');
//Using volleyball instead of morgan.
const volleyball = require('volleyball');

const app = express();

app.use(volleyball("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("hello world");
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
