// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database'); // Example of including a database module
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT, DELETE, OPTIONS');
    next();
});
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

