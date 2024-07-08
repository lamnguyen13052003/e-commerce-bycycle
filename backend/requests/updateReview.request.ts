import {ObjectId} from "mongodb";

export type UpdateReviewRequest = {
    _id: ObjectId,
    email: string,
    rating: number,
    comment: string,
}
