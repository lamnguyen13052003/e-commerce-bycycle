import {Express, Request} from "express";
import {addReview, deleteReview, getReviews, updateReview} from "../service/review.service";
import {ReviewProductType} from "../types/reviewProduct.type";
import {ObjectId} from "mongodb";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {UpdateReviewRequest} from "../requests/updateReview.request";
import {log} from "../server";
import {AddReviewProductType} from "../requests/addReviewProduct.type";
import {GetReviewHasTotalResponse} from "../responses/getReviewHasTotal.response";

const TAG = "Review Controller"
export const runReviewController = (app: Express) => {
    app.post("/api/reviews/add", (
        req: Request<any, any, AddReviewProductType, any>,
        res) => {
        log(TAG, "add review", req.body)
        const {productId, userId, comment, rating} = req.body;

        const review: ReviewProductType = {
            userId: ObjectId.createFromHexString(userId.toString()),
            productId: ObjectId.createFromHexString(productId.toString()),
            rating: rating,
            comment: comment,
            date: new Date()
        }

        addReview(review).then((response) => {
            res.send(Builder<ResponseApi<boolean>>().code(202).message("Success").data(response).build());
        }).catch((error) => {
            res.status(error.code).send(error.message)
        })
    });

    app.get("/api/reviews/:productId/:seeMore", (
        req: Request<{
            productId: string,
            seeMore: string
        }, any, any, any>,
        res) => {
        const productId: ObjectId = new ObjectId(req.params.productId);
        const seeMore: number = parseInt(req.params.seeMore);
        console.log(productId, seeMore)
        getReviews(productId, seeMore)
            .then((response) => {
                res.send(Builder<ResponseApi<GetReviewHasTotalResponse>>().code(202).message("Success").data({
                    reviews: response.reviews,
                    total: response.total
                }).build());
            })
            .catch((error) => {
                console.error("Failed to get reviews", error);
            })
    });

    app.put("/api/reviews/update", (
        req: Request<any, any, ReviewProductType, any>,
        res) => {
        log(TAG, "update review", req.body)
        updateReview(req.body).then((response) => {
            res.send(Builder<ResponseApi<boolean>>().code(202).message("Success").data(response).build());
        }).catch((error) => {
            console.error("Failed to get reviews", error);
        })
    })

    app.delete("/api/reviews/delete/:userId/:reviewId", (req, res) => {
        log(TAG, "delete review", req.body)
        const reviewId: ObjectId = new ObjectId(req.params.reviewId);
        const userId: ObjectId = new ObjectId(req.params.userId);
        deleteReview(userId, reviewId).then((response) => {
            res.send(Builder<ResponseApi<boolean>>().code(202).message("Success").data(response).build());
        }).catch((error) => {
            console.error("Failed to get reviews", error);
        })
    });
}
