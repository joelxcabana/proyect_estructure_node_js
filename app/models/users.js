const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name:{
        type: String
    },
    surname:{
        type:String
    },
    email:{
        type:String
    },
    status:{
        type:Number
    }
},{
    versionKey:false
})

module.exports = mongoose.model('users',UserSchema)