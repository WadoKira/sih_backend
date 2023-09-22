const Warehouse = require('../models/Warehouse')

const index =(req,res,next)=>{
    Warehouse.find()
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
     let warehouseID=req.body.warehouseID
     Warehouse.find().then(response =>{
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
    let warehouse =new Warehouse({
        Name:req.body.Name,
        Overview:req.body.Overview,
        Rental_Terms:req.body.Rental_Terms,
        Usage_Restrictions:req.body.Usage_Restrictions,
        Contact_Info:req.body.Contact_Info,
        Insurance:req.body.Insurance,
    })
    warehouse.save()
    .then(response=>{
        res.json({
            message:'Warehouse Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const update =(req,res,next)=>{
    let warehouseID=req.body.warehouseID

    let updatedData={
        Name:req.body.Name,
        Overview:req.body.Overview,
        Rental_Terms:req.body.Rental_Terms,
        Usage_Restrictions:req.body.Usage_Restrictions,
        Contact_Info:req.body.Contact_Info,
        Insurance:req.body.Insurance,
    }
    Warehouse.findByIdAndUpdate(warehouseID,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Warehouse Updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const destroy =(req,res,next)=>{
    let warehouseID=req.body.warehouseID
    Warehouse.findByIdAndRemove(warehouseID)
    .then(() =>{
        res.json({
            message:'Warehouse Deleted Successfully'
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