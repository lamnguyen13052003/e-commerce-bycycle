import {ObjectId} from "mongodb";

export default interface AddReviewRequest {
    productId: ObjectId,
    user_id: ObjectId,
    name: string,
    urlAvatar?: string,
    rating: number,
    comment: string,
    date: Date
}
