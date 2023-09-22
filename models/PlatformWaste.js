const mongoose  =require('mongoose')
const Schema    =mongoose.Schema

const PlatformWasteSchema   = new Schema({
    Name:{
        type:String
    },
    Overview:{
        type:String
    },
    Type_of_Waste_Good:{
        type:String
    },
    Pricing:{
        type:String
    },
    Quality_Quantity:{
        type:String
    }
    

},{timestamps:true})


const PlatformWaste = mongoose.model('PlatformWaste',PlatformWasteSchema)
module.exports = PlatformWaste