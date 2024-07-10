import {ObjectId} from "mongodb";

export interface ReviewProductResponseType {
    _id?: ObjectId,
    userId: ObjectId,
    rating: number,
    comment: string,
    date: Date
}
