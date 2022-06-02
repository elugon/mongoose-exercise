const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    unique:true,
    trim:true
},
age:Number,
programmingLevel:{
    enum:['beginner','intermediate','advanced'],
    type:String
},
registerDate:{
    type:Date,
    default:Date.now
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;