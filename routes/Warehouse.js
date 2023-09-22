const express  =require('express')
const router   =express.Router()

const WarehouseController  = require('../controllers/WarehouseController')
const Warehouse = require('../models/Warehouse')

router.get('/',WarehouseController.index)
router.post('/show',WarehouseController.show)
router.post('/store',WarehouseController.store)
router.post('/update',WarehouseController.update)
router.post('/destroy',WarehouseController.destroy)
module.exports=router