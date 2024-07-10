import {connection} from "../database.connect";
import {ReviewProductType} from "../types/reviewProduct.type";
import {Collection, ObjectId} from "mongodb";
import {checkUserId} from "./user.service";
import {productNotFound, reviewIdNotExists, userNotFound} from "../errors/error.enum";
import {checkProductId} from "./product.service";
import {ReviewProductResponseType} from "../types/reviewProductResponse.type";

const collection = 'reviews';
const reviewProductRepository: Collection<ReviewProductType> = connection.collection<ReviewProductType>(collection);

async function addReview(review: ReviewProductType): Promise<boolean> {
    await checkUserId(review.userId).then(response => {
        if (!response) throw userNotFound
    });

    await checkProductId(review.productId).then(response => {
        if (!response) throw productNotFound
    })


    return reviewProductRepository.insertOne(
        review
    ).then((response): boolean => {
        return response !== null
    })
}

async function getReviews(productId: ObjectId, seeMore: number) {
    const total = await reviewProductRepository.countDocuments({productId: productId});
    let y = 5 * seeMore
    if (seeMore === 1) y = 3
    if (y >= total) y = total;

    const pipeline = [
        {
            $match: {
                productId: productId
            }
        },
        {
            $lookup: {
                from: 'products',
                localField: 'productId',
                foreignField: '_id',
                as: 'product'
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'user'
            }
        },
        {
            $unwind: '$product' // Đảm bảo rằng kết quả là một tài liệu duy nhất
        },
        {
            $unwind: '$user' // Đảm bảo rằng kết quả là một tài liệu duy nhất
        },
        {
            $project: {
                _id: 1,
                name: '$user.fullName',
                userId: '$user._id',
                avatar: '$user.avatar',
                rating: 1,
                comment: 1,
                date: 1
            }
        }
    ];

    const reviews = await reviewProductRepository.aggregate<ReviewProductResponseType>(pipeline).limit(y).toArray()
    return {total, reviews};
}

async function updateReview(review: ReviewProductType): Promise<boolean> {
   if(!review._id) throw reviewIdNotExists
    return reviewProductRepository.findOneAndUpdate(
        {
            _id: ObjectId.createFromHexString(review._id.toString()),
            userId:  ObjectId.createFromHexString(review.userId.toString())
        },
        {
            $set: {
                date: new Date(),
                comment: review.comment,
                rating: review.rating
            }
        },
    ).then((response): boolean => {
        return response !== null
    }).catch(() => {
        return false
    })
}

async function deleteReview(userId: ObjectId, reviewId: ObjectId): Promise<boolean> {
    const filter = {_id: reviewId, userId: userId};

    return reviewProductRepository.deleteOne(
        filter,
    ).then((response): boolean => {
        return response !== null
    }).catch(() => {
        return false
    })
}

export {addReview, getReviews, updateReview, deleteReview}
