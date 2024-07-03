const express =require('express')
const router =express.Router()
const toursController=require('../controllers/toursController')
router.param('id', toursController.checkID);
router
.route('/')
.get(toursController.getAllTours)
.post(toursController.createTours)
router

.route('/:id')
.put(toursController.updateTour)
.delete(toursController.deleteUser)

// .post(toursController.createTours)
module.exports = router;