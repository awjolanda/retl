import ReviewsDAO from "./dao/ReviewsDAO.js";

export default class ReviewController {
    static async apiPostReview(req, res, next) {
        try {
            const emporerID = req.body.emporerID;
            const user = req.body.user;
            const review = req.body.review;
            const rating = req.body.rating;

            const reviewResponse = await ReviewsDAO.addReview(
                emporerID,
                user,
                review,
                rating
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetReview(req, res, next) {
        try {
            let id = req.params.id || {};
            let review = await ReviewsDAO.getReview(id);
            let rating = await ReviewsDAO.getRating(id);
            if (!review) {
                res.status(404).json({ error: "not found" });
                return;
            }
            if (!rating) {
                res.status(404).json({ error: "not found" });
                return;
            }
            res.json(review);
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }

    static async apiUpdateReview(req, res, next) {
        try {
            const reviewId = req.params.id;
            const updateData = req.body;

            const reviewResponse = await ReviewsDAO.updateReview(reviewId, updateData);
            if (reviewResponse.modifiedCount === 0) {
                throw new Error("Failed to update review.");
            }

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiDeleteReview(req, res, next) {
        try {
            const reviewId = req.params.id;

            const reviewResponse = await ReviewsDAO.deleteReview(reviewId);
            if (reviewResponse.deletedCount === 0) {
                throw new Error("Failed to delete review.");
            }

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
