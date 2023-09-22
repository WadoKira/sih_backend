const express  =require('express')
const router   =express.Router()

const EnterpreneurController  = require('../controllers/EnterpreneurController')
const enterpreneur = require('../models/Enterpreneur')
const Enterpreneur = require('../models/Enterpreneur')

router.get('/',EnterpreneurController.index)
router.post('/show',EnterpreneurController.show)
router.post('/store',EnterpreneurController.store)
router.post('/update',EnterpreneurController.update)
router.post('/destroy',EnterpreneurController.destroy)
module.exports=router