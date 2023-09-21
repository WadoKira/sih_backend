const mongoose  =require('mongoose')
const Schema    =mongoose.Schema

const franchiseSchema   = new Schema({
    Franchise_Name:{
        type:String
    },
    Contact_Info:{
        type:String
    },
    Description:{
        type:String
    },
    Requierements:{
        type:String
    },
    Investments:{
        type:Number
    }
    

},{timestamps:true})


const Franchise = mongoose.model('Franchise',franchiseSchema)
module.exports = Franchise