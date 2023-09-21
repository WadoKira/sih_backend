const mongoose  =require('mongoose')
const Schema    =mongoose.Schema

const customerSchema   = new Schema({
    Name:{
        type:String
    },
    Address:{
        type:String
    },
    Age:{
        type:Number
    },
    Phno:{
        type:Number
    }
    

},{timestamps:true})


const Customer = mongoose.model('Customer',customerSchema)
module.exports = Customer