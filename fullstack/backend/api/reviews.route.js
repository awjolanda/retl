import express from "express";
import ReviewController from './review.controller.js'
import EmperorController from './review.controller.js'

const router = express.Router();

router.route("/emperors/:id").get(ReviewController.apiGetReviews)
router.route("/new").post(ReviewController.apiPostReview)
router.route("/:id")
    .get(ReviewController.apiGetReview)
    .put(ReviewController.apiUpdateReview)
    .delete(ReviewController.apiDeleteReview)


export default router;
