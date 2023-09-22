const mongoose  =require('mongoose')
const Schema    =mongoose.Schema

const warehouseSchema   = new Schema({
    Name:{
        type:String
    },
    Overview:{
        type:String
    },
    Rental_Terms:{
        type:String
    },
    Usage_Restrictions:{
        type:String
    },
    Contact_Info:{
        type:Number
    },
    Insurance:{
        type:String
    }
    

},{timestamps:true})


const Warehouse = mongoose.model('Warehouse',warehouseSchema)
module.exports = Warehouse