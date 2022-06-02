const mongoose = require('mongoose');
const { create } = require('./models/User');
const MONGO_URI = 'mongodb://localhost:27017/app';
const User = require('./models/User');
const data = require('./data.js');


mongoose.connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to ${x.connection.name} database`);
  })
  /*.then(() => {
    let users= User.create({
      name:"prueba",
      email:"ee@gmail.com",
      age:"25",
      programmingLevel:"beginner",
      })
      return users;
  })
  .then((user) => {
    console.log('Created: ', user)
    return user
  })
  .then((user) => {
   return User.findOneAndUpdate({name:"prueba"},{name:"pruebaActualizada"},{new:true})
  })
  .then((user) => {
    console.log('Edited: ', user)
  })
  .then(() => {
    return User.insertMany(data)
  })
  .then((users) => {
    console.log('Created: ', users)
  })*/
  .then(() => {
    
    return User.findOneAndDelete({email:"pepe@gmail.com"})
  })
  .then((user) => {
    console.log('Deleted: ', user)
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => {console.log(err)})