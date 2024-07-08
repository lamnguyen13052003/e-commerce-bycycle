import {Express} from "express";
import {addReview, deleteReview, getReviews, updateReview} from "../service/review.service";
import {ReviewProductType} from "../types/reviewProduct.type";
import {ObjectId, UpdateResult} from "mongodb";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {ProductType} from "../types/product.type";
import {GetReviewHasTotalResponse} from "../responses/getReviewHasTotal.response";
import {UpdateReviewRequest} from "../requests/updateReview.request";

export const runReviewController = (app: Express) => {
    const qs = require('qs')
    app.post("/api/reviews/add/productId=:productId", (req, res) => {
        const productId: ObjectId = new ObjectId(req.params.productId);
        const {user_id, name, email, rating, comment, date} = req.body;
        const review: ReviewProductType = {
            _id: new ObjectId(),
            user_id: user_id,
            name: name,
            email: email,
            rating: rating,
            comment: comment,
            date: date
        }

        addReview(review, productId).then((response) => {
            res.send(Builder<ResponseApi<boolean>>().code(202).message("Success").data(response).build());
        }).catch((error) => {
            console.error("Failed to add review", error);
        })
    });
    app.get("/api/reviews/productId=:productId/seeMore=:seeMore", (req, res) => {
        const productId: ObjectId = new ObjectId(req.params.productId);
        const seeMore: number = parseInt(req.params.seeMore);
        getReviews(productId, seeMore).then((response) => {
            res.send(Builder<ResponseApi<GetReviewHasTotalResponse>>().code(202).message("Success").data(response).build());
        }).catch((error) => {
            console.error("Failed to get reviews", error);
        })
    });

    app.post("/api/reviews/update/productId=:productId", (req, res) => {
        const productId: ObjectId = new ObjectId(req.params.productId);
        const {_id, email, rating, comment} = req.body;
        const review: UpdateReviewRequest = {
            _id: _id,
            email: email,
            rating: rating,
            comment: comment
        }
        updateReview(review, productId).then((response) => {
            res.send(Builder<ResponseApi<boolean>>().code(202).message("Success").data(response).build());
        }).catch((error) => {
            console.error("Failed to get reviews", error);
        })
    })

    app.delete("/api/reviews/delete/reviewId=:reviewId", (req, res) => {
        const reviewId: ObjectId = new ObjectId(req.params.reviewId);
      deleteReview(reviewId).then((response) => {
            res.send(Builder<ResponseApi<boolean>>().code(202).message("Success").data(response).build());
        }).catch((error) => {
            console.error("Failed to get reviews", error);
        })
    });
}
