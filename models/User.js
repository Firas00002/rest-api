const mongoose = require("mongoose")

const Schema = mongoose.Schema


const UserSchema = new Schema({
    Fullname:String,
    email:String,
    phone:String
})

module.exports= mongoose.model('user',UserSchema)