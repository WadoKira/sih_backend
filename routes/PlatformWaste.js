const express  =require('express')
const router   =express.Router()

const PlatformWasteController  = require('../controllers/PlatformWasteController')
const PlatformWaste = require('../models/PlatformWaste')

router.get('/',PlatformWasteController.index)
router.post('/show',PlatformWasteController.show)
router.post('/store',PlatformWasteController.store)
router.post('/update',PlatformWasteController.update)
router.post('/destroy',PlatformWasteController.destroy)
module.exports=router