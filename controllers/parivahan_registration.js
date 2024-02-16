const parivahan = require('../models/parivahan')

const index =(req,res,next)=>{
    parivahan.find()
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
     let parivahanID=req.body.parivahanID
     parivahan.find().then(response =>{
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
    let parivahan1 =new parivahan({
        user_name:req.body.user_name,
        e_parivahan_id:req.body.e_parivahan_id,
        vehicle_number:req.body.vehicle_number,
    })
    parivahan1.save()
    .then(response=>{
        res.json({
            message:'User Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const update =(req,res,next)=>{
    let parivahanID=req.body.parivahanID

    let updatedData={
        user_name:req.body.user_name,
        e_parivahan_id:req.body.e_parivahan_id,
        vehicle_number:req.body.vehicle_number,
    }
    parivahan.findByIdAndUpdate(parivahanID,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'User Updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const destroy =(req,res,next)=>{
    let parivahanID=req.body.parivahanID
    parivahan.findByIdAndRemove(parivahanID)
    .then(() =>{
        res.json({
            message:'User Deleted Successfully'
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