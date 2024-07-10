import {ObjectId} from "mongodb";

export interface ReviewProductType {
    _id?: ObjectId,
    userId: ObjectId,
    productId: ObjectId,
    rating: number,
    comment: string,
    date: Date
}
