import {connection} from "../database.connect";
import {ReviewProductType} from "../types/reviewProduct.type";
import {Collection, ObjectId, PushOperator} from "mongodb";
import {ReviewProductResponse} from "../responses/reviewProduct.response";
import {ProductType} from "../types/product.type";

const collection = 'xe_dap';
const productRepository:Collection<ProductType> = connection.collection(collection);

async function addReview(review: ReviewProductType, productId: ObjectId): Promise<boolean> {
    const product = await productRepository.findOne<ProductType>({_id: productId})
    if (!product) return false
    await productRepository.updateOne({_id: productId}, {$push: {review: review}})
    return true
}

async function getReviews(productId: ObjectId, seeMore: number) {
    const total = await productRepository.countDocuments({_id: productId});
    let y = 3 * seeMore;
    if (y >= total) y = total;
    const reviews = await productRepository.find<ReviewProductResponse>({_id: productId}).limit(y).toArray();

    return {total, reviews};
}

async function updateReview(review: ReviewProductType) {
    return await productRepository.updateOne({_id: review._id}, {$set: review});
}

async function deleteReview(reviewId: ObjectId) {
    return await productRepository.deleteOne({_id: reviewId});
}
export {addReview, getReviews, updateReview, deleteReview}
