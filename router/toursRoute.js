const express =require('express')
const router =express.Router()
const toursController=require('../controllers/toursController')

router('/')
.get(toursController.getAllTours)
module.exports = router;