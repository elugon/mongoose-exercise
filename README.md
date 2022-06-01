# Mongoose hello world 🦩

Welcome to your first exercise with Mongoose. First of all:
- Fork the repo ✅
- Clone the repo ✅
- Make sure mongo is running in your computer ✅
- Open Mongo Compass and connect to your localhost. Check if you can see the local databases there ✅
- Run 

```bash
npm install
```

## Iteration 1

- Create a new file in the models folder called <code>User.js</code>
- Create a mongoose Schema for a User. Remember the structure:

```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  // ...
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

- Require the model object into the <code>main.js</code> file
- After the mongoose connection, use the **create** method to create a new user (write your own user)
- In the following .then(), console.log the user's information

## Iteration 3