import express from "express";
import ReviewsCtrl from './review.controller.js'

const router = express.Router();

router.route("emperors/:id").get(ReviewsCtrl.apiGetReview)
router.route("new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router;
