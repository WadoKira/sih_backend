const express  =require('express')
const router   =express.Router()

const FranchiseController  = require('../controllers/FranchiseController')
const Franchise = require('../models/Franchise')

router.get('/',FranchiseController.index)
router.post('/show',FranchiseController.show)
router.post('/store',FranchiseController.store)
router.post('/update',FranchiseController.update)
router.post('/destroy',FranchiseController.destroy)
module.exports=router