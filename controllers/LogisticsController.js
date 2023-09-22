const Logistics = require('../models/Logistics')

const index =(req,res,next)=>{
    Logistics.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An Error Occured!'
        })
    }
    )
}

 const show = (req,res,next)=>{
     let logisticsID=req.body.logisticsID
     Logistics.find().then(response =>{
         res.json({
             response
         })
     }
         )
         .catch(error=>{
              res.json({
            message:'An Error Occured'
             })
         })
 }


const store =(req,res,next)=>{
    let logistics =new Logistics({
        Name:req.body.Name,
        Parties_Involved:req.body.Parties_Involved,
        Cost_Fee:req.body.Cost_Fee,
        Transporting_Vehicle:req.body.Transporting_Vehicle,
        Source_Departure:req.body.Source_Departure,
        Contact_Info:req.body.Contact_Info,

    })
    logistics.save()
    .then(response=>{
        res.json({
            message:'Logistics Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const update =(req,res,next)=>{
    let logisticsID=req.body.logisticsID

    let updatedData={
        Name:req.body.Name,
        Parties_Involved:req.body.Parties_Involved,
        Cost_Fee:req.body.Cost_Fee,
        Transporting_Vehicle:req.body.Transporting_Vehicle,
        Source_Departure:req.body.Source_Departure,
        Contact_Info:req.body.Contact_Info,

    }
    Logistics.findByIdAndUpdate(logisticsID,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Logistics Updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const destroy =(req,res,next)=>{
    let logisticsID=req.body.logisticsID
    Logistics.findByIdAndRemove(logisticsID)
    .then(() =>{
        res.json({
            message:'Logistics Deleted Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

module.exports={
    index,store,update,destroy,show
}