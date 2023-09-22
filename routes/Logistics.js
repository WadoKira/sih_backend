const express  =require('express')
const router   =express.Router()

const LogisticsController  = require('../controllers/LogisticsController')
const Logistics = require('../models/Logistics')

router.get('/',LogisticsController.index)
router.post('/show',LogisticsController.show)
router.post('/store',LogisticsController.store)
router.post('/update',LogisticsController.update)
router.post('/destroy',LogisticsController.destroy)
module.exports=router