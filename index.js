const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/newsapp';
const connect = mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

connect.then(
    db => {
      console.log("Connected to the mongodb server correctly ");
    },
    err => {
      console.log("MongoDB connection error:",err);
    }
  );

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
