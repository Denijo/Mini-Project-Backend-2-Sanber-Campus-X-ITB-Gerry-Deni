const express = require("express");
const { authentication } = require("../middleware/basicAuth");
const {
  getAllReview,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
const { reviewCheckById } = require("../middleware/reviewCheck");
const { checking, isValid } = require("../middleware/auth");
const {
  getAllUsers,
  createUser,
  login,
} = require("../controllers/userController");
const { jwtAuth } = require("../middleware/ jwtAuth");
const router = express.Router();

router.get("/review-bike", getAllReview);
router.get("/review-bike/:id", reviewCheckById, getReviewById);
router.post("/review-bike", createReview);
router.put("/review-bike/:id", reviewCheckById, updateReview);
router.delete("/review-bike/:id", reviewCheckById, deleteReview);

//------------------------USER------------------------
router.post("/api/register", checking, isValid, createUser);
router.get("/api/users", getAllUsers);
router.post("/api/login", login);

module.exports = router;

// mongodb+srv://admin:password00@clusterbikereview.tvk4z1o.mongodb.net/db_reviewbike?retryWrites=true&w=majority&appName=ClusterBikeReview
