import {ObjectId} from "mongodb";

export default interface AddReviewRequest {
    _id?: ObjectId
    productId: ObjectId,
    user_id: ObjectId,
    rating: number,
    comment: string,
}
