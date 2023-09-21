const express  =require('express')
const router   =express.Router()

const CustomerController  = require('../controllers/CustomerController')
const Customer = require('../models/Customer')

router.get('/',CustomerController.index)
router.post('/show',CustomerController.show)
router.post('/store',CustomerController.store)
router.post('/update',CustomerController.update)
router.post('/destroy',CustomerController.destroy)
module.exports=router