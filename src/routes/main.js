const express = require('express')
const { getNilai, postNilai, updateNilai, deleteNilai, getNilaiById } = require('../controllers/nilaiController')
const { authentication } = require('../middleware/basicAuth')
const { getAllReview, getReviewById, createReview, updateReview, deleteReview } = require('../controllers/reviewController')
const { reviewCheckById } = require('../middleware/reviewCheck')
const router = express.Router()

// router.post('/data-nilai-mahasiswa', authentication, postNilai)
// router.put('/data-nilai-mahasiswa/:id', authentication, updateNilai)
// router.delete('/data-nilai-mahasiswa/:id', authentication, deleteNilai)
// router.get('/data-nilai-mahasiswa', getNilai)
// router.get('/data-nilai-mahasiswa/:id', getNilaiById)

router.get('/review-bike', getAllReview)
router.get('/review-bike/:id', reviewCheckById, getReviewById)
router.post('/review-bike', createReview)
router.put('/review-bike/:id', reviewCheckById, updateReview)
router.delete('/review-bike/:id', reviewCheckById, deleteReview)

module.exports = router

