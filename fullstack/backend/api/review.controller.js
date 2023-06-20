import ReviewsDAO from "../dao/ReviewsDAO.js";

export default class ReviewController {
    static async apiPostReview(req, res, next) {
        try {
            const emperorId = req.body.emperorId;
            const user = req.body.user;
            const review = req.body.review;
            const rating = req.body.rating;

            await ReviewsDAO.addReview(
                emperorId,
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
            if (!review) {
                res.status(404).json({error: "not found"});
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
            if (reviewResponse.modifiedCount === 0) {throw new Error("Failed to update review.");
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

    static async apiGetReviews(req, res, next) {
        try {
            let id = req.params.id || {};
            let reviews = await ReviewsDAO.getReviewByEmperorID(id);
            let rating = await ReviewsDAO.getReviewByEmperorID(id);
            if (!reviews) {
                res.status(404).json({ error: "not found" });
                return;
            }
            if (!rating) {
                res.status(404).json({ error: "not found" });
                return;
            }
            res.json(reviews);
        } catch (e) {
            console.log(`api, ${e}`);
            res.status(500).json({ error: e });
        }
    }
}
