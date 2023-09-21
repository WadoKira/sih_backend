const Customer = require('../models/Customer')

const index =(req,res,next)=>{
    Customer.find()
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
     Customer.find().then(response =>{
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
    let customer =new Customer({
        Name:req.body.Name,
        Address:req.body.Address,
        Phno:req.body.Phno,
        Age:req.body.Age,
    })
    customer.save()
    .then(response=>{
        res.json({
            message:'Empolyee Added Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const update =(req,res,next)=>{
    let customerID=req.body.customerID

    let updatedData={
        Name:req.body.Name,
        Address:req.body.Address,
        Phno:req.body.Phno,
        Age:req.body.Age,
    }
    Customer.findByIdAndUpdate(customerID,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Customer Updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            messsage:'Error'
        })
    })
}

const destroy =(req,res,next)=>{
    let customerID=req.body.customerID
    Customer.findByIdAndRemove(customerID)
    .then(() =>{
        res.json({
            message:'Customer Deleted Successfully'
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