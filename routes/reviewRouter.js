
import express from 'express';
import { addReview,getReviews,deleteReview,approveReview } from '../controllers/reviewController.js';  // Ensure addReview is correctly defined

const reviewRouter = express.Router();

// POST route for adding a review
reviewRouter.post("/", addReview);
reviewRouter.get("/", getReviews);
reviewRouter.delete("/:email", deleteReview);
reviewRouter.put("/approve/:email", approveReview);


export default reviewRouter;
