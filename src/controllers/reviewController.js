// routes/reviews.js
const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// const authenticateToken = require('../middleware/auth'); // Jika Anda menggunakan autentikasi JWT

// GET all reviews
const getAllReview = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


// GET one review
const getReviewById = async (req, res) => {
    res.json(res.review);
}


// CREATE a new review
const createReview = async (req, res) => {
    const review = new Review({
        bikeModel: req.body.bikeModel,
        rating: req.body.rating,
        comment: req.body.comment
    });
    try {
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const registration = async (req, res) => {
    const review = new Review({
        bikeModel: req.body.bikeModel,
        rating: req.body.rating,
        comment: req.body.comment
    });
    try {
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// UPDATE a review
const updateReview = async (req, res) => {
    if (req.body.bikeModel != null) {
        res.review.bikeModel = req.body.bikeModel;
    }
    if (req.body.rating != null) {
        res.review.rating = req.body.rating;
    }
    if (req.body.comment != null) {
        res.review.comment = req.body.comment;
    }
    try {
        const updatedReview = await res.review.save();
        res.json(updatedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// DELETE a review
const deleteReview = async (req, res) => {
    try {
        await res.review.remove();
        res.json({ message: 'Deleted Review' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}




module.exports = {
    getAllReview,
    createReview,
    getReviewById,
    updateReview,
    deleteReview
}

