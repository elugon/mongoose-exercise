# Mongoose hello world 🦩

Welcome to your first exercise with Mongoose. First of all:
- Fork the repo ✅
- Clone the repo ✅
- Make sure mongo is running in your computer ✅
- Open Mongo Compass and connect to your localhost. Check if you can see the local databases there ✅
- This project already has mongoose installed, so you just need to run:

```bash
npm install
```

## Iteration 1

- Create a new file in the /models folder called <code>User.js</code>
- Create a mongoose Schema for a User. Remember the structure:

```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  // ... Your code
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

The schema should include the following fields:
- name (string). Should be required
- email (string). Should be required, unique and trimmed.
- age (number)
- programmingLevel (string). Should be one of these values: 'beginner', 'intermediate', 'advanced'. 
- registerDate (date). Should be defaulted to the current Date

## Iteration 2

- Require the model object into the <code>main.js</code> file like this:

```js
const User = require('./models/User');
```
- After the mongoose connection, use the **create** method to create a new user (use a user of your own invention). Make sure to **return** it so that the following .then() can catch its return value
- In the following .then(), uncomment the console.log to see the information of the user you just created
- Run <code>node main.js</code> in your terminal to see the results

## Iteration 3

- Comment out the first iteration so that your code doesn't create a new user every time you run it
- In a new .then(), use the **findOneAndUpdate** method to change any property of the user you just created. Remember that the **findOneAndUpdate** method takes three parameters, the last one being optional: ({ query to find the document }, { new information }, { new: true }).
Make sure to **return** it so that the following .then() can catch the return value
- In the following .then(), uncomment the console.log to see the NEW information of the user you just edited
- Run <code>node main.js</code> in your terminal to see the results

## Iteration 4

- Import the array of users you have in the <code>data.js</code> file. To do so, you just have to write, in the <code>main.js</code> file:
```js
const data = require('./data.js');
```
- In a new .then(), use the method **insertMany()** and pass it that array. Make sure to **return** it so that the following .then() can catch the return value
- In the following .then(), uncomment the console.log to see the information of the users you just created
- Run <code>node main.js</code> in your terminal to see the results

## Iteration 5

- Comment out the past user creations and editions and use the **findOneAndDelete** method to delete the user with the following email: pepe@gmail.com.
Make sure to **return** it so that the following .then() can catch the return value
- In the following .then(), uncomment the console.log to see the information of the user you just deleted
- Run <code>node main.js</code> in your terminal to see the results
