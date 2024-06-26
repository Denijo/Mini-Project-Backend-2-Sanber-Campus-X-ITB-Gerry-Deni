const express = require('express')
const { authentication } = require('../middleware/basicAuth')
const { getAllReview, getReviewById, createReview, updateReview, deleteReview } = require('../controllers/reviewController')
const { reviewCheckById } = require('../middleware/reviewCheck')
const router = express.Router()

router.get('/review-bike', getAllReview)
router.get('/review-bike/:id', reviewCheckById, getReviewById)
router.post('/review-bike', createReview)
router.put('/review-bike/:id', reviewCheckById, updateReview)
router.delete('/review-bike/:id', reviewCheckById, deleteReview)

module.exports = router

