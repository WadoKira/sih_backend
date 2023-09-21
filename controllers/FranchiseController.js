const Franchise = require('../models/Franchise')

const index =(req,res,next)=>{
    Franchise.find()
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
     let franchiseID=req.body.franchiseID
     Franchise.find().then(response =>{
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
    let franchise =new Franchise({
        Franchise_Name:req.body.Franchise_Name,
        Description:req.body.Description,
        Requierements:req.body.Requierements,
        Investments:req.body.Investments,
    })
    franchise.save()
    .then(response=>{
        res.json({
            message:'Franchise Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const update =(req,res,next)=>{
    let franchiseID=req.body.franchiseID

    let updatedData={
        Franchise_Name:req.body.Franchise_Name,
        Description:req.body.Description,
        Requierements:req.body.Requierements,
        Investments:req.body.Investments,
    }
    Franchise.findByIdAndUpdate(franchiseID,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Franchise Updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const destroy =(req,res,next)=>{
    let franchiseID=req.body.franchiseID
    Franchise.findByIdAndRemove(franchiseID)
    .then(() =>{
        res.json({
            message:'Franchise Deleted Successfully'
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