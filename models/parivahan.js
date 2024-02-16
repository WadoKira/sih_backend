const mongoose  =require('mongoose')
const Schema    =mongoose.Schema

const parivahanSchema   = new Schema({
    user_name:{
        type:String
    },
    e_parivahan_id:{
        type:String
    },
    vehicle_number:{
        type:String

    }
    

},{timestamps:true})


const parivahan = mongoose.model('parivahan',parivahanSchema)
module.exports = parivahan