import {connection} from "../database.connect";
import {ReviewProductType} from "../types/reviewProduct.type";
import {Collection, ObjectId} from "mongodb";
import {ReviewProductResponse} from "../responses/reviewProduct.response";
import {ProductType} from "../types/product.type";
import {UpdateReviewRequest} from "../requests/updateReview.request";

const collection = 'xe_dap';
const productRepository: Collection<ProductType> = connection.collection(collection);

async function addReview(review: ReviewProductType, productId: ObjectId): Promise<boolean> {
    const filter = {_id: productId};
    const update = {$push: {review: review}}
    return productRepository.findOneAndUpdate(
        filter,
        update
    ).then((response) : boolean => {
        return response !== null
    })
}

async function getReviews(productId: ObjectId, seeMore: number) {
    const total = await productRepository.countDocuments({_id: productId});
    let y = 5 * seeMore
    if (seeMore === 1) y = 3
    if (y >= total) y = total;
    const reviews = await productRepository.find<ReviewProductResponse>({_id: productId}).limit(y).toArray();

    return {total, reviews};
}

async function updateReview(review: UpdateReviewRequest, productId: ObjectId): Promise<boolean> {
    const filter = {_id: productId};
    const update = {$set: {"review.$[e1].rating": review.rating, "review.$[e1].comment": review.comment}};
    const options = {
        arrayFilters: [{"e1.email":review.email}]
    };
    return productRepository.findOneAndUpdate(
        filter,
        update,
        options
    ).then((response) : boolean => {
        return response !== null
    })
}

async function deleteReview(reviewId: ObjectId): Promise<boolean> {
    const filter = {"review._id": reviewId};
    const update = {$pull: {review: {_id: reviewId}}};

    return productRepository.findOneAndUpdate(
        filter,
        update,
    ).then((response) : boolean => {
        return response !== null
    })
}

export {addReview, getReviews, updateReview, deleteReview}
