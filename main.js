const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/app';

mongoose.connect(MONGO_URI)
  .then(() => {
    // Your code goes here
  })
  .then(() => {
    mongoose.connection.close();
  })