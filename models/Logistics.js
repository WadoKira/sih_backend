const mongoose  =require('mongoose')
const Schema    =mongoose.Schema

const logisticsSchema   = new Schema({
    Name:{
        type:String
    },
    Parties_Involved:{
        type:String
    },
    Cost_Fee:{
        type:String
    },
    Transporting_Vehicle:{
        type:String
    },
    Source_Departure:{
        type:String
    },
    Contact_Info:{
        type:Number
    }
    

},{timestamps:true})


const Logistics = mongoose.model('Logitics',logisticsSchema)
module.exports = Logistics