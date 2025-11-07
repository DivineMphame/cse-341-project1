// server.js
const express = require('express');

const mongodb = require('./data/database'); // Example of including a database module
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', require('./routes'));


mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } 
  else {
    app.listen(PORT, () => {
      console.log(`Database is listening and node Running on port ${PORT}`)});
}
});

