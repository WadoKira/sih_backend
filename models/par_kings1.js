const mongoose  =require('mongoose')
const Schema    =mongoose.Schema

const par_kings_schema   = new Schema({
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


const par_kings = mongoose.model('Franchise',par_kings_schema)
module.exports = par_kings