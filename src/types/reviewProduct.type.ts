import {ObjectId} from "mongodb";

export interface ReviewProductType{
    _id?: ObjectId,
    productId: ObjectId,
    user_id: ObjectId,
    rating: number,
    comment: string,
    date: Date
}
