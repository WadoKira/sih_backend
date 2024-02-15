const par_kings = require('../models/par_kings1')
const par_kings1 = require('../models/par_kings1')

const index =(req,res,next)=>{
    par_kings1.find()
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
     let par_kingsID=req.body.par_kingsID
     par_kings1.find().then(response =>{
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
    let par_kings1 =new par_kings({
        Franchise_Name:req.body.Franchise_Name,
        Description:req.body.Description,
        Requierements:req.body.Requierements,
        Investments:req.body.Investments,
    })
    par_kings1.save()
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
    let par_kingsID=req.body.par_kingsID

    let updatedData={
        Franchise_Name:req.body.Franchise_Name,
        Description:req.body.Description,
        Requierements:req.body.Requierements,
        Investments:req.body.Investments,
    }
    par_kings1.findByIdAndUpdate(par_kingsID,{$set:updatedData})
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
    let par_kingsID=req.body.par_kingsID
    par_kings1.findByIdAndRemove(franchiseID)
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