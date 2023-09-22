const PlatformWaste = require('../models/PlatformWaste')

const index =(req,res,next)=>{
    PlatformWaste.find()
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
     let PlatformWasteID=req.body.PlatformWasteID
     PlatformWaste.find().then(response =>{
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
    let platformWaste =new PlatformWaste({
        Name:req.body.Name,
        Overview:req.body.Overview,
        Type_of_Waste_Good:req.body.Type_of_Waste_Good,
        Pricing:req.body.Pricing,
        Quality_Quantity:req.body.Quality_Quantity,

    })
    platformWaste.save()
    .then(response=>{
        res.json({
            message:'PlatformWaste Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const update =(req,res,next)=>{
    let PlatformWasteID=req.body.PlatformWasteID

    let updatedData={
        Name:req.body.Name,
        Overview:req.body.Overview,
        Type_of_Waste_Good:req.body.Type_of_Waste_Good,
        Pricing:req.body.Pricing,
        Quality_Quantity:req.body.Quality_Quantity,
    }
    PlatformWaste.findByIdAndUpdate(PlatformWasteID,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Platformwaste Updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const destroy =(req,res,next)=>{
    let PlatformWasteID=req.body.PlatformWasteID
    PlatformWaste.findByIdAndRemove(PlatformWasteID)
    .then(() =>{
        res.json({
            message:'PlatformWaste Deleted Successfully'
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