const Enterpreneur = require('../models/Enterpreneur')

const index =(req,res,next)=>{
    Enterpreneur.find()
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
     let customerID=req.body.customerID
     Enterpreneur.find().then(response =>{
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
    let enterpreneur =new Enterpreneur({
        Name:req.body.Name,
        Address:req.body.Address,
        Phno:req.body.Phno,
        Age:req.body.Age,
        MSMEID:req.body.MSMEID,
    })
    enterpreneur.save()
    .then(response=>{
        res.json({
            message:'Enterpreneur Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const update =(req,res,next)=>{
    let enterpreneurID=req.body.enterpreneurID

    let updatedData={
        Name:req.body.Name,
        Address:req.body.Address,
        Phno:req.body.Phno,
        Age:req.body.Age,
        MSMEID:req.body.MSMEID,

    }
    Enterpreneur.findByIdAndUpdate(enterpreneurID,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Enterpreneur Updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const destroy =(req,res,next)=>{
    let enterpreneurID=req.body.enterpreneurID
    Enterpreneur.findByIdAndRemove(enterpreneurID)
    .then(() =>{
        res.json({
            message:'Enterpreneur Deleted Successfully'
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