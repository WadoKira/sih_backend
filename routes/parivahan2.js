const express  =require('express')
const router   =express.Router()

const ParivahanController  = require('../controllers/parivahan_registration')
const Franchise = require('../models/parivahan')

router.get('/',ParivahanController.index)
router.post('/show',ParivahanController.show)
router.post('/store',ParivahanController.store)
router.post('/update',ParivahanController.update)
router.post('/destroy',ParivahanController.destroy)
module.exports=router