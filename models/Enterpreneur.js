const mongoose  =require('mongoose')
const Schema    =mongoose.Schema

const enterpreneurSchema   = new Schema({
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
    },
    KindofBusiness:{
        type:String
    },
    MSMEID:{
        type:Number
    }
    

},{timestamps:true})


const Enterpreneur = mongoose.model('Customer',enterpreneurSchema)
module.exports = Enterpreneur